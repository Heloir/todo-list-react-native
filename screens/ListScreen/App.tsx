import {Text} from 'react-native';
import React from 'react';
import {Main, Title, Todo, TodoBox} from '../../public/ListScreenStyles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function ListScreen() {
  return (
    <Main>
      <Title>Lista De Tarefas</Title>
      <Todo>

        <TodoBox>
          <BouncyCheckbox
            size={25}
            unfillColor="#FFFFFF"
            text="Exemplo Do Que Fazer"
            iconStyle={{borderColor: 'red', marginLeft: 10}}
            innerIconStyle={{borderWidth: 1}}
            textStyle={{fontFamily: 'JosefinSans-Regular', color: 'white'}}
            onPress={(isChecked: boolean) => {}}
          />
        </TodoBox>

        
      </Todo>
    </Main>
  );
}
