import React from 'react';
import { View, Text } from 'react-native';


/*
  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <ConfirmPhotosModal></ConfirmPhotosModal>
      <View style= {{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => this.setState({ visibleModal: false })}>
          <View style={styles.button}>
            <Text style={{fontSize: 22}}>{"Cancel"}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ visibleModal: false })}>
          <View style={styles.button}>
            <Text style={{color: "#FA770B", fontSize: 22}}>{"Save"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );


*/
export default class ConfirmPhotosModal extends React.Component {
    renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            <Text>{text}</Text>
          </View>
        </TouchableOpacity>
      );

    render() {
        return (
          <View style={{alignContent:'center'}}>
            <Text style={{textAlign: 'center', fontSize: 24} }>You've selected 7 photos to save</Text>
            <Text style={{textAlign: 'center'}}>The photos you didn't select will be discarded.</Text>
          </View>
        );
    }
}