import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'

import * as MediaLibrary from 'expo-media-library'

import * as ImagePicker from 'expo-image-picker';

import OptionsMenu from "react-native-options-menu";

import MyButton from '../components/MyButton'

import axios from 'axios'

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

            pickerResult = await ImagePicker.launchImageLibraryAsync({
                base64: true,
            });

        }else if (type === 'camera'){
            pickerResult = await ImagePicker.launchCameraAsync({
                base64: true,
            });
        }

        // let pickerResult = await ImagePicker.launchImageLibraryAsync();        

        // console.log(pickerResult);

        

        // data:image/jpg;base64,${pickerResult.base64}

        // console.log('64', pickerResult.base64)



        if (pickerResult.cancelled === true){
            return;
        }

        if (pickerResult.base64 === undefined){
            return;
        }

        // let localUri = result.uri;

        this.setState({
            selectedImage: {
                localUri: pickerResult.uri,
            },
            localUri: pickerResult.uri,
            imageInBase64: pickerResult.base64,
        })

    }  



    uploadToServer = async () =>{

        let localUri = this.state.localUri;
        let filename = localUri.split('/').pop();        

        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
      
        // let formData = new FormData();
        // formData.append('photo', { uri: localUri, name: filename, type });
        

        // 

        // this.state.imageInBase64



        // console.log('uploading', formData);
      
        
        let bodyFormData = new FormData();
        let baseImg64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAECXAABAlwHgl9Q7AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAC71JREFUeJztm3tclFUax7\/vOzDgAHIXEVAUUqJEWG94IXXVSq0sd63dti2zNGurdV2tTbtoW7Zrmdl1t8tWHzMtL6Wf1DatdAVXDdPSUFS8clNAhsswDDDz7h9nrjDDMMIAK\/0+n\/cz8573XJ73d57znHOe57wSZgS8qKRIMrcpJgKxgyyDLCHRDJp9iPvysuymfDNNtFXbikKtYmRb0VzpP9Z6w19RFgb4sgTwcdPOlQ4FhffO\/YHZEs8r45D5ursfUohfR8vVOaDIPCQjMQeQKg1Qqgelo6XqDDDygIxErOW+ph4u6MDYxdmRJGJkGtmvOiMUV4vfLgzJ6XxgVITm6OrbW57OA5cTpQKU6aG81rsC+MiO7PvKdfQMKPBuoy2AmxUEVNVBSQ2YvGR3+gTnkRa113o\/Om4HiaFHHfKoVQbvNN4M3BIDoG+AYh3Um9pegMKq3vxt7Gyr5tyc+AlRAYXW53df+wZ+Ki+rrRO0iBiABpOwO7UNrW90Ur8NBKkrANA3aIjUXGDGwNdRqwxMjN9MD00RALNTX2JodCZVdcGtb9RDtJgYEMOppEYMr9YgpzSVzb8exsT4zQDkV\/Vh3rBnuOPqf9HdT0tUQCEzU1ayaOQCPjt+F5Ld6qq9hpXEC8oeYISnBQPVEOrvfq\/SGLKkYFIkZg16mSdH\/ZktedMJ73aR9F67MCoqVJKRkpqeRGgucEkfybAP8+mhKeK2\/qsJ9S\/jxX3PYTD6eyqupyi7bGIA\/FQQqQG5BeyoVQaC\/bSU1EQBoJKMfParEQzq8Z3LMsfKBqI1hDEsejffnJ3Cw9vXoK\/X4Hl3eIyyVm0aDUZhlCM14OtmUPYMKCAtai9zhz6LwehHQVUfKgyhzZZJCj8MwJenpvHwV2uoN6npEVDERV10a8RuEVRMWHwfEHe5FZgUsZXwVbkmZ0DYYU5pk8i9NJCNub8nPjiPqf3X0Df4pNv69Q0aPj\/+O6ID8wnxL6fBpCY++CTFuli3ZVsBfauJAbEYrDGv0\/wb6aCEQkbv7RwrSwGgzujPrvM3oqsLIqP3dreDwleuJyNuB5MSNpIc8QNGk4ruai05pWkons0dnkDfpv6XCoOY1sO62axAatQ+zlf2RZZM\/KLnf7kp4VMmJ6x3WKu4w3s\/zGXVkYc4XXEVAP1CjpMes5Os\/PFtKb4D2pxyXT1ctNuhT07YQHF1DPHBJ4gLOk2RLpYtedP54uTtLV6fTBuwiuExu6zTdlF1LJMT1re16A7wisfOYN6hR2ogOeIQJkXFKe0ATmkHWPPMTFnJlMR1bus6V9kPjY+Ov4+dxe1J77No11uc0vbn6vAfvSG6FV5zZVp26JGaQqICCimstpmx2akvsWjkAnT1QWhrw4gJOuuynrzyJGZs2YK\/j56YoLP0DCjAhEx04HlviQ54YSjZQwHqjCoGRh6wpj2Q9iIjY77l0e2rGfx+MVpDGAD1JrVD2RPlyeReupZxfbZya\/\/V1DZ0I688iaz88SSGHMWkqLwpuneJASioirHagwDfajbk3s2MLVvYdOJO4rqf5pqIg3x5ahqrjjwIwEc\/zaHepKbB6MuUTw\/w8v4lPDHiccL8S611Tk5Y76CB3oDXickuHkJ6zE6GRGehqw+k1LzyBWFUd56bxCPbP6awqjcmRebV7Kd459A8YoLOUm9SszL7ae74fCcT+24CID74JNf33cThi4O9KrfXiVl3bDoSCk+OnI+PbNuay5KJ7mots7Z9Rp3Rj2JdDPsLr+OCrhevZj9FZV2IdQd+piKRdcfuRcbEkoxHUasMfJF3u1fl9joxP15MYceZCaRF7WXpmDnW9G4+OpZkvkKdUcRsLuh6WV9W36Dhmd2vEtv9jDW\/SZGZn\/4kY3tv4\/viERwsTveq3K3aRLYUyRE5HJqZiq9cz5qcWTy9+zUrIRbEBp1B36ChTN\/DmhakrqCqLhgfuYEFwxcxJ20ZRkXF1PX7OFzi1aFU5nWNAcgpTWbGFx+gIPHb5HfYOG0U6b12OeTJr4p3IAWgqi6Y1B77WTt1HHPSlgHwbOYKb5MCtJPGWPDw4NdZMf5PVluzvyiDr07dSmb+BAqr46gwhBKorqRX4HlGxHzL9X03MSr2ayQUjIqKZXuX8o+Dj7WHqK3zx1wOMuJ28+GUe+gbcrrJMwXJwVtnQWF1HPO\/ed+re6NGaH9iQOyYZ6R8wINpb5EadcgpGQBHy1L4+KfZrD16fxOb5GV0DDH2iA4sYmTMHnoFFhLqX055bSjlhmiOX0qnuNqrPpfm0PHEuIInblMvoH1mpcuBwQhFHRhD77TEgG2HXtMBMfROTQyIHXqpHrTtHKXt9MRY0N4Hm9w6quYPhwdSIbyb8+f3b4ONufDIYHhkCEQ4yVddB3\/dA+8cgoGR8NYNcFWY86hCxkcwIBzenST8x33eFLFzEENq912QEAL\/PAhvfG8rNywa3p1su5\/8KeRXwU2JsHSM6\/e78RMorG6a3iwxiaGwbFzz4a0DxRAbBK9MEDNIbYPtRXxlW8RybG9BzPLxMMrFLFxVB8fKYHaqKJNdbKsLoIcG0qKEPIcu2tJlCZ4ZDcF2S51IjSBmkHmXoZKELCD80g0mKK1xTopbYibGCyFKahx7rjFmDBTC6eoh+jVbbFsCKuZBkFoQ6KeC68z+pUe3w2sHnNc32kxcZiPv5ahYUadJgW15oJIhwBemJ8G1kZCZL4gL8LVp+PN7xHVdHKy6WaSNWS3eqTk0a2MsPbv7vGtS7PPtLXAM+PcPE6RYXnJotCAHYGue87qC1JBi7uXTFdAvxHbd0E+kHy4RxrhML3r+seFiBnsuC7TmEyONh\/4Qc\/DybIV7UsCNxlh6Lst8wOnfd4iXs2D5ftEb1h7Ob1TerB019XDwAswbJu4LqyFP67zN9F7gY+6ulRPE1Rj27cwdChEaWJsDR8sEYTFBTW3dkJ7i97ti1+9rD5fExHWHPuawj0Wlcy8Jxu8bJIbOwQtiLA8IbyowQIaZsH2F4tCRvQa6giVPmR6+sQse+PvAzYnif5a5ncRQ+OMQYdwf2ym0x6IxYXbE+MhiiAFkF7lu2x4uibFogc7c2yDsQlI4zEoV43xPgTCqEkKovY2CixaNycwXeUa50Cxn7W4+ATO32tLH9bERYym\/\/JegVsGPJXBnMkiSTVPsNeaaCND4iv\/ftZYYy0sUVEFqlO0M3pQE8XukRPTOqBhxrzUIDbEcR0sIEReIHk6OgDDzsZaYIGEw7ZFTKjQy3VxfVqPziZZ2zlbA+UqYEA+3iIgtQ3rahooF9jbGMvwv1UJeuas3doRLYgaIcA\/9w2D\/PU2fWwRPMg+jiG6w1Yl\/ulgHu87DpH62tL84cdfeuVn0aoC5Z7MaaZW9tvnIsMLsmnl8J6w\/Zsu3cIQY6sH+YjEoYSMtu6jlC0SXxCzJFMbMz0Vca22O+H1uj5g9nOXT1sIHh8XaZvsZUWd0YNN8ADvPCQ17+5DYOOaWOT4\/UgLnKmFDrhgaewqEDVqx3\/HQ5OcnxAx1qVbE0CM1cFILH+fA12dcE9EYndbt0FbwkVt2sKkROq\/boa1gOW3a3DrMGa54YsB22rTCgx16lyDGggrzarklBrhLEQNNDza5QpcjBmwHm5pzm3ZJYsD9p0cy0P6fdnQSWD49cuI2NciA66PZXQSVBjFrWcyOSeF7icVKCH4cBjosutVZ4CsWg3pffwbLLJa0wBhgB138I9p6EwcKKxl9dpZ01NGd+4ISCjR\/wF\/heSR+47YVhRxk5qFwojXCtht8qGaBZPUkexYAXazI+JEPNPeVQwOwHANPs1hq5ZdNHQfPzvl2YximZknJQeYeHpeyWydWx8OzdYyJW1w8UYC3MTD0SiAFPD8ZPrVJisRpTNzLQmmXk\/z\/t2i5xixTEoBkuxQFeBMVA680UsATjTFyq93dOeA+npB2tLlEnQSe2BjLMFoHpF7JpEBLNWapEg70Q2EqC6XN3hWpc6BlxJgINNuSFgYffsbP6Gr4HyjJNhBnaliWAAAAAElFTkSuQmCC';        


        console.log('image', this.state.imageInBase64);

        bodyFormData.append('photo', 'data:image/png;base64,'+this.state.imageInBase64);
        // bodyFormData.append('photo', baseImg64 );
        

        // console.log('bodyform', bodyFormData);

        axios.post('https://backend.sofebiz.com/superadmin/photo',{
              image: 'data:image/png;base64,'+this.state.imageInBase64,
            })
            .then((response) => {
            
                //handle success
                console.log('response',response);
            
            })
            .catch((response) => {
                
                //handle error
                console.log(response);

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
