import React, { Component } from 'react'

import { View, Text, ScrollView } from 'react-native'

import InfoField from '../components/InfoField'

class StaffDetailScreen extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){

    }

    render(){

        let { name, email, gender, id, passkey, phone, status, coordinate } = this.props.route.params;

        return (

            <ScrollView style={{padding:12}}>
            
            <InfoField 
                title="ID"
                value={id}
            />

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
 
            

            </ScrollView>

        )
    
    
    }


}

export default StaffDetailScreen