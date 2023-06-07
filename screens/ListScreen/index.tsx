import React, {useEffect, useState} from 'react';
import {
  AddTodo,
  AddTodoButton,
  AddTodoText,
  Main,
  RemoveTodoButton,
  Todo,
  TodoBox,
} from './components';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';
import {incrementTodoList, incrementremoveTodo} from '../../redux/States';

export default function ListScreen() {
  const dispatch = useDispatch();

  const todoList = useSelector((state: RootState) => state.todo.todos);

  const [todoValues, setTodoValues] = useState({
    id: 0,
    todoText: '',
    checked: false,
  });

  function addTodo() {
    if (todoValues.todoText.trim() !== '') {
      const newTodos = {
        id: todoValues.id++,
        text: todoValues.todoText,
        checked: todoValues.checked,
      };

      dispatch(incrementTodoList(newTodos.text));
    }
  }

  return (
    <Main>
      <AddTodo>
        <AddTodoText
          placeholder="Adicionar Tarefa"
          placeholderTextColor={'white'}
          value={todoValues.todoText}
          onChangeText={(text: string) =>
            setTodoValues({
              id: todoValues.id,
              todoText: text,
              checked: todoValues.checked,
            })
          }
        />

        <AddTodoButton activeOpacity={1} onPress={addTodo}>
          <Text style={{color: 'white'}}>+</Text>
        </AddTodoButton>
      </AddTodo>

      <Todo>
        {todoList.map(item => {
          if (item.text === '') return <></>;

          return (
            <TodoBox key={item.id}>
              <BouncyCheckbox
                size={25}
                unfillColor="#FFFFFF"
                text={item.text}
                iconStyle={{borderColor: 'red', marginLeft: 10}}
                innerIconStyle={{borderWidth: 1}}
                textStyle={{
                  fontFamily: 'JosefinSans-Regular',
                  color: 'white',
                  overflow: 'hidden',
                  minWidth: '80%',
                  maxWidth: '90%',
                }}
                isChecked={item.checked}
                onPress={(isChecked: boolean) => {
                  item.checked = isChecked;
                }}
              />

              <RemoveTodoButton
                activeOpacity={1}
                onPress={() => {
                  dispatch(incrementremoveTodo(item.id));
                }}>
                <Text style={{color: 'white'}}>X</Text>
              </RemoveTodoButton>
            </TodoBox>
          );
        })}
      </Todo>
    </Main>
  );
}
