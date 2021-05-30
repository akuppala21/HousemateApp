import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ProfilePicture from "react-native-profile-picture";

const GroupListItem = ({ textValue, id, checked, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <ProfilePicture
          isPicture={false}
          user={name}
          shape='circle'
          backgroundColor='#468189'
          userTextColor='#F6F6F6'
        />
      </View>
      <Text
        style={[styles.text, checked ? styles.strikeText : styles.unstrikeText]}
      >
        {textValue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    flex: 5,
    fontSize: 20,
    marginVertical: 20,
    width: 100
  },
  strikeText: {
    color: "#bbb",
    textDecorationLine: "line-through"
  },
  unstrikeText: {
    color: "#29323c"
  },
  profile: {
    marginRight: 20,
    marginLeft: 20
  }
});

export default GroupListItem;
