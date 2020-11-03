import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'

const WIDTH = Dimensions.get('window').width;

import Styles from '../styles/Styles'

class SecondScreen extends Component {
   render() {
       return (
           <View style={Styles.container}>
               <Text style={{fontSize:50}}>W: {WIDTH} pts</Text>
               <Text>aSecondScreen</Text>
           </View>
       );
   }
}

const styles = {
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
   },
};

export default SecondScreen;
