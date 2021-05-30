import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import GroupListItem from "../components/GroupListItem";
import GroupList from "../components/GroupList";
import firebase from "firebase/app";
import "firebase/database";

function ThisWeekScreen() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const tasksRef = firebase.database().ref("tasks");
    var tasks = [];
    tasksRef.once("value", snapshot => {
      snapshot.forEach(childSnapshot => {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        tasks.push({
          checked: childData.checkedValue,
          name: childData.name,
          id: childData.taskidValue,
          textValue: childData.textValue
        });
      });
      setTodos(tasks);
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <GroupList todos={todos} />
    </SafeAreaView>
  );
}

export default ThisWeekScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F4",
    flex: 1
  }
});
