import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class MyButton extends Component {
   render() {
       return (
        <TouchableOpacity 
        activeOpacity={0.8}
        style={{justifyContent:"center", backgroundColor:"#2D2AD9", alignItems:"center", padding:6, margin:6, borderRadius:12}}>

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
