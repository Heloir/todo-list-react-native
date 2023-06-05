import React, {useState} from 'react';

import {
  Container,
  LoginButton,
  Main,
  Title,
  UserInput,
} from '../../public/LoginScreenStyles';
import {Text} from 'react-native';

interface IUser {
  username: string;
  password: string;
}

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState<IUser>({
    username: '',
    password: '',
  });

  const buttonDisabled = () => {
    if (user.username.length === 0 || user.password.length === 0) {
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
          keyboardType="numeric"
          value={user.password}
          onChangeText={passwordText =>
            setUser({...user, password: passwordText})
          }
        />
        <LoginButton
          activeOpacity={1}
          disabled={buttonDisabled()}
          onPress={() => navigation.navigate('List', { name: user.username })}>
          <Text>Login</Text>
        </LoginButton>
      </Container>
    </Main>
  );
}
