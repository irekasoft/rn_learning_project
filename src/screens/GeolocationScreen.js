import React, { Component } from 'react'
import { View, Text } from 'react-native'

import * as Location from 'expo-location'

class GeolocationScreen extends Component {

   constructor(props){
       super(props);

       this.state = {
           location: null,
           errorMsg: null,
       }
   }

   async componentDidMount(){

    Location.requestPermissionsAsync().then(({status})=>{

        // console.log('status', mylocation);

        if ( status !== 'granted' ){

            this.setState({
                errorMsg: 'Permission to access location was denied'
            })
    
        }
    
        Location.getCurrentPositionAsync().then((location)=>{

            this.setState({
                location: location,
            })

        }).catch(e=>{

            this.setState({
                errorMsg: 'Something wrong with GPS'
            })

        });
    
        

    }).catch(e=>{
        console.log('e', e);

        this.setState({
            errorMsg: 'Something with GPS permission'
        })

    });

    let status;   


   }

   render() {

    let text = 'Waiting..';
    if (this.state.errorMsg) {
      text = this.state.errorMsg;
    } else if (this.state.location) {
      
      text = JSON.stringify(this.state.location);

      text = this.state.location.coords.latitude + " , " + this.state.location.coords.longitude;

    }
  
    return (
           <View style={styles.container}>
               <Text>{text}</Text>
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

export default GeolocationScreen;
