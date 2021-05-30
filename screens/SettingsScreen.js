import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";

import useStatusBar from "../hooks/useStatusBar";
import { logout } from "../components/Firebase/firebase";

function SettingsScreen() {
  useStatusBar("dark-content");
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
});
