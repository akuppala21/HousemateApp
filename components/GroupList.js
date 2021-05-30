import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import GroupListItem from "./GroupListItem";

const GroupList = ({ todos }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map(todo => (
        <GroupListItem key={todo.id} {...todo} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center"
  }
});

export default GroupList;
