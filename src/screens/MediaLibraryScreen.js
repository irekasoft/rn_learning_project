import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'

import * as MediaLibrary from 'expo-media-library'

import * as ImagePicker from 'expo-image-picker';

import OptionsMenu from "react-native-options-menu";

import MyButton from '../components/MyButton'

class MediaLibraryScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedImage:null,
        };

    }

    _mediaLibraryAsync = async () => {
        let { status } = await MediaLibrary.requestPermissionsAsync()
        let media = await MediaLibrary.getAssetsAsync({
          mediaType: ['photo', 'video'],
        })
        let video = await MediaLibrary.getAssetInfoAsync(media.assets[0])
    
        console.log(video);
      };

    //   Buka image gallery

    openImagePickerAsync = async (type) => {

        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }

        let pickerResult = null;
    
        if (type === 'gallery'){
            pickerResult = await ImagePicker.launchImageLibraryAsync();
        }else if (type === 'camera'){
            pickerResult = await ImagePicker.launchCameraAsync();
        }

        // let pickerResult = await ImagePicker.launchImageLibraryAsync();        

        console.log(pickerResult);

        if (pickerResult.cancelled === true){
            return;
        }

        // let localUri = result.uri;

        this.setState({
            selectedImage: {
                localUri: pickerResult.uri,
            },
            localUri: pickerResult.uri,
        })

    }  



    uploadToServer = async () =>{

        let localUri = this.state.localUri;
        let filename = localUri.split('/').pop();        

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
      
        let formData = new FormData();
        formData.append('photo', { uri: localUri, name: filename, type });

        console.log('uploading', formData);
      
        fetch('http://example.com/upload.php', {
          method: 'POST',
          body: formData,
          header: {
            'content-type': 'multipart/form-data',
          },
        }).then((response)=>{

            console.log('hi',response);

        }).catch(e=>{

            console.log('error',e);

        });

    }

    /////////////////////////
   //
   render() {

    if (this.state.selectedImage !== null) {
        return (
          <View style={styles.container}>
            <Image
              source={{ uri: this.state.selectedImage.localUri }}
              style={styles.thumbnail}
            />
            <MyButton 
                title="Upload to Server" 
                onPress={()=>{
                    this.uploadToServer()
                }}
            />
            
          </View>
        );
      }

        return (
            <View style={styles.container}>
                <OptionsMenu
                    customButton={<Text style={{color:'blue'}}>Select Picture</Text>}
                    
                    options={[
                        "Take From Gallery", 
                        "Take Picture", 
                        "Cancel"
                    ]}
                    actions={[
                        ()=>{ this.openImagePickerAsync('gallery') },
                        ()=>{ this.openImagePickerAsync('camera') },
                        ()=>{},
                    ]
                    }/>
                <Text>MediaLibraryScreen</Text>
                <Button
                onPress={()=>{this.openImagePickerAsync('gallery') }}
                title="Do MediaLibrary Stuff"
              />
            </View>
        );

   }
}


const styles = {
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
   },
   thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
};

export default MediaLibraryScreen;
