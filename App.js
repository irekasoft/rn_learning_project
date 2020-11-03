import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';

import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';



const Stack = createStackNavigator();

function App() {
  return (
    
    // <HomeScreen/>
    // <SecondScreen/>

    <NavigationContainer>
      <Stack.Navigator>        

        <Stack.Screen name="HomeScreen">
          {props => <HomeScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="SecondScreen">
          {props => <SecondScreen {...props} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App