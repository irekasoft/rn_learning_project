import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';
import StaffScreen from './src/screens/StaffScreen';
import StaffDetailScreen from './src/screens/StaffDetailScreen';
import StaffAddEditScreen from './src/screens/StaffAddEditScreen';

import StaffEditScreen from './src/screens/StaffEditScreen';
import GeolocationScreen from './src/screens/GeolocationScreen';
import CameraScreen from './src/screens/CameraScreen';

import BarCodeScannerScreen from './src/screens/BarCodeScannerScreen';
import MediaLibraryScreen from './src/screens/MediaLibraryScreen';

import HomeMenuScreen from './src/screens/HomeMenuScreen'

const Stack = createStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="HomeMenuScreen" // Prod: HomeScreen        
      >        

        <Stack.Screen name="HomeMenuScreen"
          options={{
            title: 'Home',            
          }} 
        >
          {props => <HomeMenuScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="StaffScreen"
          options={{
            title: 'Staff',            
          }} 
        >
          {props => <StaffScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="StaffDetailScreen"
          options={{
            title: 'Staff Details',            
          }} 
        >
          {props => <StaffDetailScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen 
          name="StaffAddEditScreen"
          options={{
            title: 'Add New Staff',            
          }}        
        >
          {props => <StaffAddEditScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen 
          name="StaffEditScreen"
          options={{
            title: 'Edit Staff',            
          }}        
        >
          {props => <StaffEditScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="HomeScreen">
          {props => <HomeScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="SecondScreen">
          {props => <SecondScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="GeolocationScreen">
          {props => <GeolocationScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="CameraScreen">
          {props => <CameraScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="BarCodeScannerScreen">
          {props => <BarCodeScannerScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="MediaLibraryScreen">
          {props => <MediaLibraryScreen {...props} />}
        </Stack.Screen>



      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App