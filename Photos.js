import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import CameraExample from './Camera'
import CameraRollPicker from 'react-native-camera-roll-picker';

export default class Photos extends React.Component {
  state = {
    camera: true,
  };

  styles = StyleSheet.create({
    navbarButton: {
      margin: 15,
    },
    button: {
      flex: 1,
      height: 60, 
      borderBottomWidth: 5,
      borderColor: "white",
      justifyContent: "center",
      alignItems: "center", 
    },
    buttonActive: {
      flex: 1,
      height: 60,
      borderBottomWidth: 5,
      borderColor: "white",
      borderBottomColor: "#333333",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      textAlign: "center",
      textAlignVertical: "center",
      fontWeight: "bold",
      color: "#333333",
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
        <View style={{ flexDirection: "row", justifyContent: "space-between", height: 50, marginLeft: 5, marginRight: 5 }}>
          <TouchableOpacity style={this.styles.navbarButton}>
            <Text style={{ color: "#333333", fontWeight: "bold" }}>Tips</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#333333", margin: 15 }}>#</Text>
            <TouchableOpacity style={this.styles.navbarButton}>
              <Text style={{ color: "#FA770B", fontWeight: "bold" }}>Review</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.camera ? 
          <CameraExample addPhoto={this.getCameraPhotos}></CameraExample> :
          <CameraRollPicker callback={this.getSelectedImages} />}
        <View style={{ flexDirection: "row", backgroundColor: "white" }}>
          <TouchableOpacity style={this.state.camera ? this.styles.buttonActive : this.styles.button} onPress={this.switchToCamera}>
            <Text style={this.styles.buttonText}>PHOTO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.camera ? this.styles.button : this.styles.buttonActive} onPress={this.switchToCameraRoll}>
            <Text style={this.styles.buttonText}>GALLERY</Text>
          </TouchableOpacity>
        </View>
      </View>
    );   
  }
}
