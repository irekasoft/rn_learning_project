import React, { Component } from 'react'

import { View, Text, ScrollView } from 'react-native'

import InfoField from '../components/InfoField'

import MyButton from '../components/MyButton' 

import axios from 'axios'

class StaffDetailScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            passkey: props.route.params.passkey,
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

    render(){

        // let { name, email, gender, id, passkey, phone, status, coordinate,  } = this.props.route.params;

        let { name, email, gender, id, passkey, phone, status, coordinate,  } = this.state;

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
                style={{height:6}}
            ></View>

            <MyButton
                title="Delete"
                onPress={()=>{

                }}
            />
            

            </ScrollView>

        )
    
    
    }


}

export default StaffDetailScreen