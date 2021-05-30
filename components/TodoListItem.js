import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
          <View style={styles.checkbox}>
            <MaterialCommunityIcons name="checkbox-marked" size={40} color="#031926" />
          </View>
        ) : (
          <View style={styles.checkbox}>
            <MaterialCommunityIcons name="checkbox-blank-outline" size={40} color="#031926" />
          </View>
        )}
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          checked ? styles.strikeText : styles.unstrikeText,
        ]}>
        {textValue}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonContainer} onPress={onRemove(id)}>
          <View style={styles.trash}>
            <MaterialCommunityIcons name="trash-can" size={40} color="#031926" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontSize: 20,
    marginVertical: 20,
    width: 100,
  },
  checkbox: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  trash: {
    marginRight: 10,
  }
});

export default TodoListItem;