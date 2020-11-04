import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

class BarButton extends Component {
   render() {
       return (
           <TouchableOpacity
              onPress={this.props.onPress}
              activeOpacity={0.8}
          >
            <View style={{flexDirection:'row', alignItems:'center', backgroundColor:"white", padding:12}}>
              <Image 
              style={{width:30,height:30, borderRadius:12}}
              source={require('../img/download.jpg')}/>

              <View style={{justifyContent:'space-between', flexDirection:'row', flex:1, padding:6}}>
              <Text>{this.props.title}</Text>
              <Text style={{color:'grey'}}>{this.props.secondaryTitle}</Text>
              </View>
            </View>

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

export default BarButton;
