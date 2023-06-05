import styled from 'styled-components/native';

export const Main = styled.View`
  width: 100%;
  height: 100%;
  background-color: #17171f;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

export const Container = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  gap: 15px;
`;
export const UserInput = styled.TextInput`
  width: 300px;
  padding-left: 10px;
  background-color: #565661;
  color: white;
  border-radius: 10px;
`;


export const LoginButton = styled.TouchableOpacity`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ disabled }) => !disabled ? '#34eb4c' : 'gray'};
  display: flex;
  align-items: center;
  justify-content: center;
`