import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class MyButton extends Component {
   render() {
       return (
        <TouchableOpacity 
        onPress={this.props.onPress}
        activeOpacity={0.8}
        style={{justifyContent:"center", backgroundColor:"#2D2AD9", alignItems:"center", padding:6, borderRadius:6, height:44}}>

        <Text style={{color:'white'}}>{this.props.title}</Text>

        </TouchableOpacity>
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

export default MyButton;
