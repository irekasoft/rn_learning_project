import React, { Component } from 'react'
import { 
    
    View, Text, Dimensions, SafeAreaView,
    TouchableOpacity,
    Image,
    Button,
    Switch,
    ScrollView,
    TextInput

} from 'react-native'

const WIDTH = Dimensions.get('window').width;

import Styles from '../styles/Styles'

class SecondScreen extends Component {

  constructor(props){

    super(props);

    this.state= {
        url: 'https://google.com',
    }

  }


   render() {
       return (           
        <SafeAreaView style={Styles.container}>

            <ScrollView style={{width:"100%"}}>
               
            <Text style={{fontSize:50}}>W: {WIDTH} pts</Text>

            {/* <TextInput
              value={this.state.url}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            /> */}


            <TouchableOpacity
                onPress={()=>{
                    console.log('hello ')
                }}
            >
              <Text>aSecondScreen</Text>
              <Image 
                style={{width:100,height:100, margin:12,borderRadius:12}}
                source={require('../img/download.jpg')}/>
            </TouchableOpacity>

            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={true }
                ios_backgroundColor="#3e3e3e"
                value={true}
            />

            <Button
                title="Learn"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                />

            <Image
               style={{width:200,height:200}}             
               source={{uri:'https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/06/43150-1.jpg?resize=1000%2C1000&ssl=1'}} 
             />
            
            <Image
               style={{width:200,height:200}}             
               source={{uri:'https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/06/43150-1.jpg?resize=1000%2C1000&ssl=1'}} 
             />

            <Image
               style={{width:200,height:200}}             
               source={{uri:'https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/06/43150-1.jpg?resize=1000%2C1000&ssl=1'}} 
             />
            
            </ScrollView>
               
        </SafeAreaView>           
       );
   }
}


export default SecondScreen;
