import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, TextInput, 

    TouchableOpacity } from 'react-native'

import BarButton from '../components/BarButton'

const rows = [
    {
      title:'Apa',
      subtitle:'A'
    },
    {
      title:'Awesome',
      subtitle:'B'
    },
    {
      title:'Hello',
      subtitle:'C'
    },
    {
      title:'Apa',
      subtitle:'D'
    }
]

class HomeScreen extends Component {
  
   constructor(props){
       super(props);

       this.state = {
         name: '',
       }

   }


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

               <View style={{height:30}}></View>


               <TextInput
                placeholder="Enter your name"
                style={{ backgroundColor:"white", padding:12 }}
                value={this.state.name}
                onChangeText={(text)=>{
                    this.setState({
                        name: text
                    })
                }}
               />

                <View
                    style={{height:12}}
                ></View>

                <TouchableOpacity 
                activeOpacity={0.8}
                style={{justifyContent:"center", backgroundColor:"#2D2AD9", alignItems:"center", padding:6, margin:6, borderRadius:12}}>

                <Text style={{color:'white'}}>Login</Text>

                </TouchableOpacity>

               

                <View
                    style={{height:30}}
                ></View>

                {
                    rows.map((item, idx)=>{

                        return (
                            <BarButton
                                key={idx}
                                onPress={()=>{
                                //console.log('')

                                this.props.navigation.navigate('SecondScreen',{
                                    name:item.title + ' ' + idx,
                                    location: 'Ampangan',
                                });

                                // this.props.navigation.push('SecondScreen',{
                                //     name:item.title + ' ' + idx,
                                //     location: 'Ampangan',
                                // });

                                }}
                                title={item.title}
                                secondaryTitle="ABC"
                            />
                        )

                    })
                }
                
                

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
