import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CameraExample from './Camera'
import CameraRollPicker from 'react-native-camera-roll-picker';
import Modal from 'react-native-modal';
import TipsView from './TipsView';

export default class Photos extends React.Component {
  state = {
    camera: true,
    cameraPhotos: [],
    selectedPhotos: [],
    visibleModal: false,
  };

  switchToCamera = () => {
    console.log('camera')
    this.state.camera ? null : this.setState({camera: true})
  }

  switchToCameraRoll = () => {
    console.log('cameraRoll')
    this.state.camera ? this.setState({camera: false}) : null
  }

  getCameraPhotos = (photo) => {
    this.setState({cameraPhotos: [...this.state.cameraPhotos, photo]});
  }

  getSelectedImages = (images) => {
    console.log(this.state.selectedPhotos)
    this.setState({selectedPhotos: images.map((elem) => elem.uri)});
  }

  _showTips = () => {
    this.setState({ visibleModal: true });
  };

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <TipsView></TipsView>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal 
          isVisible={this.state.visibleModal}
          onBackdropPress={() => this.setState({ visibleModal: false })}
          hideModalContentWhileAnimating={true}
          animationIn="slideInDown"
          animationOut="slideOutUp"
          backdropOpacity={0}
          style={{marginLeft: 0, marginRight: 0, justifyContent: "flex-start", paddingTop: 0}}
        >
          {this._renderModalContent()}
        </Modal>
        <View style={{ flexDirection: "row", justifyContent: "space-between", height: 50, marginLeft: 5, marginRight: 5 }}>
          <TouchableOpacity style={styles.navbarButton} onPress={this._showTips}>
            <Text style={{ color: "#333333", fontWeight: "bold",}} >Tips</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#333333", margin: 15 }}>{this.state.cameraPhotos.length + this.state.selectedPhotos.length}</Text>
            <TouchableOpacity style={styles.navbarButton} onPress={this.props.validate.bind(this,this.state.cameraPhotos.concat(this.state.selectedPhotos))}>
              <Text style={{ color: "#FA770B", fontWeight: "bold" }}>Review</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.camera ? 
          <CameraExample addPhoto={this.getCameraPhotos}></CameraExample> :
          <CameraRollPicker callback={this.getSelectedImages} selectedMarker={<Image
            style={styles.marker}
            source={require("./assets/selected.png")}
          />}/>}
        <View style={{ flexDirection: "row", backgroundColor: "white" }}>
          <TouchableOpacity style={this.state.camera ? styles.buttonActive : styles.button} onPress={this.switchToCamera}>
            <Text style={styles.buttonText}>CAMERA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.camera ? styles.button : styles.buttonActive} onPress={this.switchToCameraRoll}>
            <Text style={styles.buttonText}>GALLERY</Text>
          </TouchableOpacity>
        </View>
      </View>
    );   
  }
}

const styles = StyleSheet.create({
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
  },
  marker: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: 'transparent',
    width: 20,
    height: 20
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    width: undefined,
    borderRadius: 6,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
})
