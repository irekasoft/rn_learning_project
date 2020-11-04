import React, { Component } from 'react'

import { View, Text, ScrollView, Alert } from 'react-native'

import InfoField from '../components/InfoField'

import MyButton from '../components/MyButton' 

import axios from 'axios'

class StaffDetailScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            passkey: props.route.params.passkey,
            loading: false,
            deleting: false,
        }

    }

    componentDidMount(){
      
      this.subs = [
        this.props.navigation.addListener('focus', ()=> { this.callAPI() })
      ]  
      
      this.callAPI();

    }

    callAPI(){

        axios.get('http://backend.sofebiz.com/superadmin/view/' + this.state.passkey).then((response)=>{
            console.log('response', response.data.message);

            let data = response.data.message;

            this.setState({

              name: data.name, 
              email: data.email, 
              gender: data.gender, 
              phone: data.phone, 
              status: data.status, 
              coordinate: data.coordinate,

            })


        }).catch((e)=>{
            console.log('response', e);
        })

    }

    deleteStaff(){

      this.setState({
        deleting: true,
      })

      let bodyFormData = new FormData();
      bodyFormData.append('passkey', this.state.passkey);

      console.log('bodyform', bodyFormData);

      axios({
          method: 'post',
          url: 'https://backend.sofebiz.com/superadmin/delete',
          data: bodyFormData,
          headers: {'Content-Type': 'multipart/form-data' }
          })
          .then((response) => {
          
              //handle success
              console.log('response',response);
              this.props.navigation.pop();              
          
          })
          .catch((response) => {
              
              //handle error
              console.log(response);

          });



    }


    ////////////
    // RENDER
    render(){

        // let { name, email, gender, id, passkey, phone, status, coordinate,  } = this.props.route.params;

        let { name, email, gender, id, passkey, phone, status, coordinate,  } = this.state;

        if (this.state.deleting === true){

          return (
            <View style={{flex: 1, justifyContent:'center', alignItems:"center"}}>
              <Text>Deleting...</Text>
            </View>
          )

        }

        return (

            <ScrollView style={{padding:12}}>
            
      

            <InfoField 
                title="Name"
                value={name}
            />

            <InfoField 
                title="Email"
                value={name}
            />
            <InfoField 
                title="Phone"
                value={phone}
            />
            <InfoField 
                title="Status"
                value={status}
            />

            <InfoField 
                title="Coordinate"
                value={coordinate}
            />

            {/*  */}

            <View   
                style={{height:30}}
            ></View>
 
            <MyButton
                title="Edit Staff"
                
                onPress={()=>{
                    // this.props.navigation.navigate('StaffEditScreen',this.props.route.params)
                    this.props.navigation.navigate('StaffEditScreen',this.state)
                }}
            />

            <View   
                style={{height:12}}
            ></View>

            <MyButton
                title="Delete"

                backgroundColor="red"
                onPress={()=>{

                  Alert.alert(
                    "Are you sure want to delete this staff?",
                    null,
                    [
                      {
                        text: "No",
                        onPress: () => { 
                          console.log("Cancel Pressed")
                        },
                        style: "cancel"
                      },
                      { 
                        text: "Delete", 
                        onPress: () => { 
                          console.log("OK Pressed")

                          this.deleteStaff();

                        },
                        style: 'destructive'
                     }
                    ],
                    { cancelable: false }
                  );

                }}
            />
            

            </ScrollView>

        )
    
    
    }


}

export default StaffDetailScreen