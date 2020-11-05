import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import { BarCodeScanner } from 'expo-barcode-scanner';



class BarCodeScannerScreen extends Component {
  
  constructor(props){
      super(props);

      this.state = {
        hasPermission: null,
        scanned: false,
      }
  }

  componentDidMount(){

    BarCodeScanner.requestPermissionsAsync().then(({ status })=>{

        this.setState({
          hasPermission:(status === 'granted'),
        })

    }).catch(e=>{

        console.log('e',e);

    });

  }

  handleBarCodeScanned = ({ type, data }) => {

    this.setState({
        scanned: true,
    })
    
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

  };



  render() {

    if (this.state.hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (this.state.hasPermission === false) {
        return <Text>No access to camera</Text>;
      }

       return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>

            {this.state.scanned == true && 
            
            <Button title={'Tap to Scan Again'} 
                
                onPress={() => {
                    
                    this.setState({
                        scanned: false,
                    })

                }} 

            />
            }
            <BarCodeScanner
                onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
                style={{width:'100%',flex:1}}
            />

            
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

export default BarCodeScannerScreen;
