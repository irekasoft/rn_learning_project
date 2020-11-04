import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView, ActivityIndicator } from 'react-native'

import MyButton from '../components/MyButton'

import axios from 'axios'

class StaffAddEditScreen extends Component {
   
  constructor(props){
    super(props);

    let { name, email, gender, id, passkey, phone, status, coordinate } = props.route.params;

    this.state = {

        loading: false,

        name: name,
        phone_no: phone,
        email: email,
        gender: gender,
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
                keyboardType="phone-pad"
                autoCapitalize="words"
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
                keyboardType="email-address"
                style={styles.inputStyle}     
                autoCapitalize='none'           
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

               <View style={{height:20}}></View>

               {
                 this.state.loading === false &&
                 this.renderButton()
               }

               {
                 this.state.loading === true &&                 
                 <ActivityIndicator/>
               }

                              

           </ScrollView>
       );
   }

   renderButton(){

    let { name, phone_no, email, gender } = this.state;

    return (
        <MyButton
        title="Update Staff"
        onPress={()=>{

            this.setState({
                loading: true,
            })

            // let params = {
            //     name: name,
            //     phone: phone_no,
            //     email: email,
            //     gender: gender,
            //     photo: 'photo',
            //     // passkey: '',
            //     coordinate: '123,123'
            // }

            // console.log('params', params);

            // axios.post('https://backend.sofebiz.com/superadmin/create',params).then((response)=>{
            //     console.log('result', response)
            // }).catch((e)=>{
            //     console.log('error', e)
            // })

            let bodyFormData = new FormData();
            bodyFormData.append('name', name );
            bodyFormData.append('phone', phone_no );
            bodyFormData.append('email', email );
            bodyFormData.append('gender', gender );
            bodyFormData.append('photo', 'photo');
            bodyFormData.append('coordinate', '123,123');

            console.log('bodyform', bodyFormData);

            axios({
                method: 'post',
                url: 'https://backend.sofebiz.com/superadmin/update',
                data: bodyFormData,
                headers: {'Content-Type': 'multipart/form-data' }
                })
                .then((response) => {
                
                    //handle success
                    console.log('response',response);
                    
                
                })
                .catch((response) => {
                    
                    //handle error
                    console.log(response);

                });

        }}
       />
     )
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
        borderStyle:"solid", 
        borderWidth:1,
    }
}



export default StaffAddEditScreen;
