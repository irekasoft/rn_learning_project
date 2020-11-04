import React, { Component } from 'react'
import { 
    
    View, Text, Dimensions, SafeAreaView,
    TouchableOpacity,
    Image,
    Button,
    Switch,
    ScrollView,
    TextInput,

    FlatList,

} from 'react-native'


import BarButton from '../components/BarButton';

const WIDTH = Dimensions.get('window').width;

import Styles from '../styles/Styles'

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

class SecondScreen extends Component {

  constructor(props){

    super(props);

    this.state= {
        url: 'https://google.com',
        rows: [],
    }

  }

  componentDidMount(){

    // Call API 

    this.setState({
      
      rows: rows,

    })

  }


  render() {

    


       return (           
        <SafeAreaView style={Styles.container}>

          <ScrollView style={{width:"100%", padding: 12}}>

          {
            this.props.route.params !== undefined && 
            <Text style={{fontSize:50}}>{this.props.route.params.name}</Text>
          }
              
          

          {
            this.state.rows.map((item, idx)=>{

              return (
                <BarButton 
                  title={item.title}
                  secondaryTitle={item.subtitle}                   
                  onPress={()=>{

                    this.props.navigation.push('HomeScreen');                    
                    
                  }}          
                />
              )
              
            })
          }

          
          

          

          <View style={{height:30}}></View>


          {/* <TextInput
            value={this.state.url}
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          /> */}

          

          {/* <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={true }
              ios_backgroundColor="#3e3e3e"
              value={true}
          /> */}

        

          <Image
              style={{width:200,height:200}}             
              source={{uri:'https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/06/43150-1.jpg?resize=1000%2C1000&ssl=1'}} 
            />
          
          
          </ScrollView>
               
        </SafeAreaView>           
      );
   }
}


export default SecondScreen;
