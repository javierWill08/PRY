import React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Principal from '../components/principal';
import {createStackNavigator} from '@react-navigation/stack';
import Categoria from '../components/categoria';
import Aprendizaje from '../components/aprendizaje';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Principal"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#7ac3e6', //Set Header color
          },
        }}>
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: 'Escoge tu edad',
          }}
        />
        <Stack.Screen
          name="Categoria"
          component={Categoria}
          options={{
            title: 'Escoge la categoría',
          }}
        />
        <Stack.Screen
          name="Aprendizaje"
          component={Aprendizaje}
          options={{
            title: 'Escoge el juego',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
