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
  margin-left: 30px;
  margin-right: 30px;
`;

export const Todo = styled.View`
  gap: 30px;
`;
