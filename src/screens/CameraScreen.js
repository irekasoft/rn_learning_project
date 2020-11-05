import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Camera } from 'expo-camera';

class CameraScreen extends Component {

  constructor(props){
      super(props);

      this.state = {
          hasPersmission: null,
          type: Camera.Constants.Type.back,
      }

  }

  componentDidMount(){

    Camera.requestPermissionsAsync().then(({status})=>{

      if (status === 'granted'){

        this.setState({
          hasPersmission: true,
        })

      }          
      

    })
      

  }


  render() {

    if (this.state.hasPermission === null) {
      return <View />;
    }
    if (this.state.hasPermission === false) {
      return <Text>No access to camera</Text>;
    }

       return (
        <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={this.state.type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
     );
   }

}

const styles = {
   container: {
       flex: 1,
   },
};

export default CameraScreen;
