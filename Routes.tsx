import React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ListScreen from './screens/ListScreen';
import { Provider, useSelector } from 'react-redux'
import { RootState } from './redux/Store';

const Stack = createNativeStackNavigator<ParamListBase>();

export default function RoutesNavigation() {
    const username = useSelector((state: RootState) => state.todo.username)
    
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={() => ({title: username})}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}