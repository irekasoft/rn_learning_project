import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import axios from 'axios'

import BarButton from '../components/BarButton'

class StaffScreen extends Component {

    constructor(props){
        
        super(props);

        this.state = {
            staff_list: [],
            loading: true,
        }

    }

    componentDidMount(){

        axios.get('https://backend.sofebiz.com/superadmin/views').then((response)=>{

            console.log('res', response.data);

            this.setState({
                staff_list: response.data,
                loading:false,
            })

        }).catch((e)=>{

            console.log('error', e);

            this.setState({                
                loading:false,
            })

        })

    }


    render(){

        return (
            <View>
            
            {
                this.state.loading === true && 
                <View style={{flexDirection:'row', flex:1, justifyContent:'center', padding:6}}>
                <ActivityIndicator/>
                <View style={{width:5}}></View>
                <Text>Loading</Text>
                </View>    
            }            

            {
                this.state.staff_list.map((staff, idx)=>{
                    return (
                        <BarButton
                            key={idx}
                            title={staff.name}
                            secondaryTitle={staff.phone}
                            onPress={()=>{
                                this.props.navigation.push('StaffDetailScreen');
                            }}
                        />
                    )
                })
            }

            </View>
        )

    }

}


export default StaffScreen