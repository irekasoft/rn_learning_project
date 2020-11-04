import React, { Component } from 'react'

import { View, Text, ScrollView } from 'react-native'


class StaffDetailScreen extends Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){

    }

    render(){

        return (

            <ScrollView style={{padding:12}}>

            <Text>Staff Details</Text>

            

            <View style={{flexDirection:'row', flex:1}}>
            
            <Text>Name</Text>
            <Text>{this.props.route.params.name}</Text>
            </View>
            

            </ScrollView>

        )
    
    
    }


}

export default StaffDetailScreen