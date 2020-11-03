import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'

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

                {
                    rows.map((item, idx)=>{

                        return (
                            <BarButton
                                onPress={()=>{
                                //console.log('')

                                this.props.navigation.navigate('SecondScreen',{
                                    name:item.title + ' ' + idx,
                                    location: 'Ampangan',
                                });

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
