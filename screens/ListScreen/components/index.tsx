import styled from 'styled-components/native';

export const Main = styled.View`
  width: 100%;
  height: 100%;
  background-color: #17171f;
  gap: 30px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-top: 30px;
  text-align: center;
`;

export const TodoBox = styled.View`
  display: flex;
  justify-content: center;
  background-color: #565661;
  height: 50px;
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
`;

export const Todo = styled.ScrollView`
  max-height: 700px;
`;

export const AddTodo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 10px;
  background-color: #565661;
  margin-top: 20px;
`;

export const AddTodoText = styled.TextInput`
  padding-left: 20px;
  color: white;
  width: 79%;
`;

export const AddTodoButton = styled.TouchableOpacity`
  background-color: #34eb4c;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  border-radius: 50px;
`;
