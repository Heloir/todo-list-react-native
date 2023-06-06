import React, {useState} from 'react';
import {
  AddTodo,
  AddTodoButton,
  AddTodoText,
  Main,
  Todo,
  TodoBox,
} from '../../public/ListScreenStyles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Text} from 'react-native';

export default function ListScreen() {
  const [todos, setTodos] = useState([] as any);

  const [todoText, setTodoText] = useState('');

  function addTodo() {
    if (todoText.trim() !== '') {
      const newTodos = [...todos, {text: todoText}];
      setTodos(newTodos);
      setTodoText('');
    }
  }

  return (
    <Main>
      <AddTodo>
        <AddTodoText
          placeholder="Adicionar Tarefa"
          placeholderTextColor={'white'}
          value={todoText}
          onChangeText={(text: string) => setTodoText(text)}
        />

        <AddTodoButton activeOpacity={1} onPress={addTodo}>
          <Text style={{color: 'white'}}>+</Text>
        </AddTodoButton>
      </AddTodo>

      <Todo>
        {todos.map((item: any) => {
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
