import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'

import * as MediaLibrary from 'expo-media-library'

import * as ImagePicker from 'expo-image-picker';

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

    openImagePickerAsync = async () => {

        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        // let pickerResult = await ImagePicker.launchImageLibraryAsync();

        let pickerResult = await ImagePicker.launchCameraAsync();

        console.log(pickerResult);

        if (pickerResult.cancelled === true){
            return;
        }

        this.setState({
            selectedImage: {
                localUri: pickerResult.uri,
            }
        })


    }  


   render() {

    if (this.state.selectedImage !== null) {
        return (
          <View style={styles.container}>
            <Image
              source={{ uri: this.state.selectedImage.localUri }}
              style={styles.thumbnail}
            />
          </View>
        );
      }

        return (
            <View style={styles.container}>
                <Text>MediaLibraryScreen</Text>
                <Button
                onPress={this.openImagePickerAsync}
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
