import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native'



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

               {/* Top View */}
               <View style={{                   
                   backgroundColor:"#3C6CE8",
                   height: 60,
               }}>
               <Text
                style={{
                  fontSize:24
                }}
               >1</Text>
               </View>

              {/* Content Below */}
               <View style={{
                   flex:1,
                   backgroundColor:"#E0E0E0"
               }}>
                <Text
                    style={{
                    fontSize:60
                    }}
                >2</Text> 
                <Text
                    style={{
                    fontSize:60
                    }}
                >2</Text> 
                <Text
                    style={{
                    fontSize:60
                    }}
                >2</Text> 
                <Text
                    style={{
                    fontSize:60
                    }}
                >2</Text> 
                <Text
                    style={{
                    fontSize:60
                    }}
                >2</Text> 
               </View>


           </View>
           <View>
            <Text>AAA</Text>
           </View>
           </React.Fragment>
       );
   }
}


export default HomeScreen;
