import React, { Component } from 'react'
import { View, Text } from 'react-native'

class InfoField extends Component {
   render() {
       return (
        <View style={{flexDirection:'column', flex:1, marginBottom:12}}>
            
        <Text style={{fontWeight:"bold"}}>{this.props.title}</Text>
        <Text>{this.props.value}</Text>



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

export default InfoField;
