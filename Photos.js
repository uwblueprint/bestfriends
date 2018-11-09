import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import CameraExample from './Camera'
import CameraRollPicker from 'react-native-camera-roll-picker';

export default class Photos extends React.Component {
  state = {
    camera: true,
  };

  styles = StyleSheet.create({
    button: {
      width: 80, 
      height: 25, 
      borderRadius: 5, 
      backgroundColor: "black", 
      margin: 30,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    buttonActive: {
      width: 80, 
      height: 25, 
      borderRadius: 5, 
      backgroundColor: "white", 
      margin: 30,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    buttonText: {
      textAlign: "center",
      textAlignVertical: "center",
      color: "white"
    },
    buttonTextActive: {
      textAlign: "center",
      textAlignVertical: "center",
      color: "black"
    }
  })

  cameraPhotos = [];
  selectedPhotos = [];

  switchToCamera = () => {
    console.log('camera')
    this.state.camera ? null : this.setState({camera: true})
  }

  switchToCameraRoll = () => {
    console.log('cameraRoll')
    this.state.camera ? this.setState({camera: false}) : null
  }

  getCameraPhotos = (photo) => {
    this.cameraPhotos.push(photo)
    console.log(this.cameraPhotos)
  }

  getSelectedImages = (images) => {
    selectedPhotos = images;
    console.log(this.selectedPhotos)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <TouchableOpacity>
            {/* next button */}
          </TouchableOpacity>
        </View>
        {this.state.camera ? 
          <CameraExample addPhoto={this.getCameraPhotos}></CameraExample> :
          <CameraRollPicker callback={this.getSelectedImages} />}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "black" }}>
          <TouchableOpacity style={this.state.camera ? this.styles.buttonActive : this.styles.button} onPress={this.switchToCamera}>
            <Text style={this.state.camera ? this.styles.buttonTextActive : this.styles.buttonText}>PHOTO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.camera ? this.styles.button : this.styles.buttonActive} onPress={this.switchToCameraRoll}>
            <Text style={this.state.camera ? this.styles.buttonText : this.styles.buttonTextActive}>GALLERY</Text>
          </TouchableOpacity>
        </View>
      </View>
    );   
  }
}
