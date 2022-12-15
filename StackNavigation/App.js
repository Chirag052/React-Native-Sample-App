/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import Login from './screens/Login';
const Stack = createStackNavigator()




function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff'
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            header: () => null
          }
          }>

        </Stack.Screen>
        <Stack.Screen
          name='Home'
          component={Home}>

        </Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer >
  )
}



export default App;
