import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Type to add new task..."
        value={newTodoItem}
        onChangeText={todoInputHandler}
        placeholderTextColor={'#999'}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <TouchableOpacity onPress={addTodoHandler}>
          <View>
            <MaterialIcons name="add-circle" size={40} color="#031926" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 20,
    marginLeft: 20,
  },
  button: {
    marginRight: 20,
  },
});

export default TodoInsert;