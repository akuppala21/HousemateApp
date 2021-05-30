import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";
import firebase from "firebase/app";
import "firebase/database";
import { FastField } from "formik";
import { AuthUserContext } from "../navigation/AuthUserProvider";

function writeNewTask(uid, username, taskid, text, checked) {
  // Get a key for a new Post.
  var newTaskKey = firebase.database().ref().child("tasks").push().key;

  // A post entry.
  var postTask = {
    key: newTaskKey,
    name: username,
    uidValue: uid,
    taskidValue: taskid,
    textValue: text,
    checkedValue: checked,
  };
  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates["/tasks/" + newTaskKey] = postTask;
  updates["/user-tasks/" + uid + "/" + newTaskKey] = postTask;
  firebase.database().ref().update(updates);

  return postTask;
}

function MyTasksScreen() {
  // todos: {id: Number, textValue: string, checked: boolean }
  var [todos, setTodos] = useState([]);
  const { user, setUser } = useContext(AuthUserContext);
  // console.log(user);

  const addTodo = (text) => {
    // need to add userID

    var taskid = firebase.database().ref().child("tasks").push().key;
    //setTodos([...todos, { id: taskid, textValue: text, checked: false }]);

    setTodos([
      ...todos,
      writeNewTask(user.uid, user.email, taskid, text, false),
    ]);
  };

  const onRemove = (id) => (e) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    var todo = todos.filter((todo) => todo.id === id);
    firebase
      .database()
      .ref("tasks/" + todo[0].key)
      .remove();

    firebase
      .database()
      .ref("user-tasks/" + todo[0].uid + "/" + todo[0].key)
      .remove();
  };

  const onToggle = (id) => (e) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
    var todo = todos.filter((todo) => todo.id === id);
    var updates = {};

    updates["/tasks/" + todo[0].key + "/checkedValue/"] = !todo[0].checked;
    updates[
      "/user-tasks/" + todo[0].uid + "/" + todo[0].key + "/checkedValue/"
    ] = !todo[0].checked;

    return firebase.database().ref().update(updates);
  };

  useEffect(() => {
    const tasksRef = firebase.database().ref("user-tasks/" + user.uid);
    var tasks = [];
    tasksRef.once("value", (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        tasks.push({
          key: childKey,
          checked: childData.checkedValue,
          name: childData.name,
          uid: childData.uidValue,
          id: childData.taskidValue,
          textValue: childData.textValue,
        });
      });
      setTodos(tasks);
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
}

export default MyTasksScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F4",
    flex: 1,
  },
});
