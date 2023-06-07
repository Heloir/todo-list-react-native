import React, {useState} from 'react';

import {
  Container,
  LoginButton,
  Main,
  Title,
  UserInput,
} from './components';
import {Text} from 'react-native';
import { useDispatch } from 'react-redux';
import { incrementUser } from '../../redux/States';

interface IUser {
  username: string;
  password: string;
}

export default function LoginScreen({ navigation }: any) {

  const dispatch = useDispatch()
  
  const [user, setUser] = useState<IUser>({
    username: '',
    password: '',
  });

  const buttonDisabled = () => {
    if (user.username.trim() === '' || user.password.trim() === ''){
      return true;
    }
    return false;
  };

  return (
    <Main>
      <Title>Faça seu login</Title>
      <Container>
        <UserInput
          placeholder="Digite Seu Nome De Usuario"
          placeholderTextColor="white"
          value={user.username}
          onChangeText={usernameText =>
            setUser({...user, username: usernameText})
          }
          maxLength={30}
        />
        <UserInput
          placeholder="Digite Sua Senha"
          placeholderTextColor="white"
          value={user.password}
          onChangeText={passwordText =>
            setUser({...user, password: passwordText})
          }
        />
        <LoginButton
          activeOpacity={1}
          disabled={buttonDisabled()}
          onPress={() => navigation.navigate('List', dispatch(incrementUser(user.username)))}>
          <Text>Login</Text>
        </LoginButton>
      </Container>
    </Main>
  );
}
