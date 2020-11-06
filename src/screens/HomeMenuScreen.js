import React, { Component } from 'react'
import { View, Text, Image, TouchableHighlight, ScrollView } from 'react-native'

class HomeMenuScreen extends Component {
   render() {
       return (
           <ScrollView style={styles.container}>           
            <View 
                style={{
                   flexDirection: 'row',
                   flexWrap: 'wrap',
                   justifyContent:'center'
                }}>
            
            {this.renderItem("Staff", "StaffScreen")}
            {this.renderItem("Camera", "CameraScreen")}
            {this.renderItem("Geolocation", "GeolocationScreen")}
            {this.renderItem("Media Library","MediaLibraryScreen")}
            {this.renderItem("Barcode Scanner", "BarCodeScannerScreen")}
            {this.renderItem("Misc","HomeScreen")}

            {this.renderItem("Barcode Scanner", "BarCodeScannerScreen")}
            {this.renderItem("Misc","HomeScreen")}

            </View>              

           </ScrollView>
       );
   }

   renderItem(title = "---", link = "HomeMenuScreen"){
       return (
        <TouchableHighlight 
        activeOpacity={0.6}
        underlayColor="#DDDDDD" 
        onPress={() => {
          
          this.props.navigation.navigate(link);
                    
        }}
       >
        <View style={{alignItems:'center', padding:8, paddingBottom:24, borderRadius:8, width:150 }} >
        <Image source={require('../img/menu_icon.png')} />
        <View style={{height:10}}></View>
        <Text style={{fontSize:18, textAlign:"center"}}>{title}</Text>
        </View>
       </TouchableHighlight>
       )
   }
}

const styles = {
   container: {
       flex: 1,
       paddingTop:20,
   },
};

export default HomeMenuScreen;
