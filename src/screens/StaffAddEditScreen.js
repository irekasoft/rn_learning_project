import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'

import MyButton from '../components/MyButton'

import axios from 'axios'

class StaffAddEditScreen extends Component {
   
  constructor(props){
    super(props);

    this.state = {
        name: '',
        phone_no: '',
        email: '',
        gender: '',
    }

  }



   render() {

       let { name, phone_no, email, gender } = this.state;

       return (
           <ScrollView style={{padding:12}} >
               
               <Text>Name</Text>
               <TextInput
                style={styles.inputStyle}                
                value={name}
                onChangeText={(text)=>{
                    this.setState({
                        name: text,
                    })
                }}
               />

               <Text>Phone Number</Text>
               <TextInput
                style={styles.inputStyle}                
                value={phone_no}
                onChangeText={(text)=>{
                    this.setState({
                        phone_no: text,
                    })
                }}
               />

                <Text>Email</Text>
               <TextInput
                style={styles.inputStyle}                
                value={email}
                onChangeText={(text)=>{
                    this.setState({
                        email: text,
                    })
                }}
               />

               <Text>Gender</Text>
               <TextInput
                style={styles.inputStyle}                
                value={gender}
                onChangeText={(text)=>{
                    this.setState({
                        gender: text,
                    })
                }}
               />





               {/*  */}

               <MyButton
                title="Create New Staff"
                onPress={()=>{

                    let params = {
                        name: name,
                        phone: phone_no,
                        email: email,
                        gender: gender, 
                    }
                    axios.post('https://backend.sofebiz.com/superadmin/create',params).then((response)=>{
                        console.log('result', response)
                    }).catch((e)=>{
                        console.log('result', e)
                    })



                }}
               />

               

           </ScrollView>
       );
   }
}

const styles = {
    inputStyle: {
        marginTop:3, 
        marginBottom:6,
        padding:6, 
        borderRadius:6, 
        backgroundColor:'white', 
        borderColor:'grey', 
        borderStyle:"sold", 
        borderWidth:1,

    }
}



export default StaffAddEditScreen;
