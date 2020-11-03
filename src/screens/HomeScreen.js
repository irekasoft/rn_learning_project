import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

import BarButton from '../components/BarButton'

class HomeScreen extends Component {
   render() {
       return (           
           <React.Fragment>
           
           <View style={{
               flex:1,
               flexDirection:'column',
               justifyContent:'center',
               backgroundColor:'#C4C4C4'
             }}>                          

              {/* Content Below */}
               <ScrollView style={{
                   flex:1,
                   backgroundColor:"#E0E0E0"
               }}>

                <View
                    style={{height:30}}
                ></View>
                
                <BarButton
                    onPress={()=>{
                      //console.log('')

                      this.props.navigation.navigate('SecondScreen');


                    }}
                    title="Hello"
                    secondaryTitle="ABC"
                />
                <BarButton
                    onPress={()=>{
                      console.log('')
                    }}
                    title="Hello"
                />
                <BarButton
                    onPress={()=>{
                      console.log('')
                    }}
                    title="Hello"
                />
                <BarButton
                    onPress={()=>{
                      console.log('')
                    }}
                    title="Hello"
                />

               </ScrollView>


           </View>
           <View style={{padding:3}}>
            <Text style={{textAlign:"center"}}>App</Text>
           </View>
           </React.Fragment>
       );
   }
}


export default HomeScreen;
