import React, {useEffect, useState} from 'react';
import {
  AddTodo,
  AddTodoButton,
  AddTodoText,
  Main,
  Todo,
  TodoBox,
} from './components';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/Store';
import {incrementTodoList} from '../../redux/States';

interface ITodo {
  index?: number;
  text: string;
  isChecked?: boolean;
}

export default function ListScreen() {
  const dispatch = useDispatch();

  const [todos, setTodos] = useState<ITodo[]>([]);

  const todoList = useSelector((state: RootState) => state.todo.todos);

  const [todoValues, setTodoValues] = useState({
    todoText: '',
    checked: false,
  });

  function addTodo() {
    if (todoValues.todoText.trim() !== '') {
      const newTodos = [
        ...todos,
        {text: todoValues.todoText, checked: todoValues.checked},
      ];
      setTodos(newTodos);

      newTodos.map(todo => {
        dispatch(incrementTodoList(todo.text));
      });
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
            setTodoValues({todoText: text, checked: false})
          }
        />

        <AddTodoButton activeOpacity={1} onPress={addTodo}>
          <Text style={{color: 'white'}}>+</Text>
        </AddTodoButton>
      </AddTodo>

      <Todo>
        {todoList.map((item: ITodo) => {
          if (item.text === '') return <></>;

          return (
            <TodoBox key={item.index}>
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
                onPress={(isChecked: boolean) => {}}
              />
            </TodoBox>
          );
        })}
      </Todo>
    </Main>
  );
}
