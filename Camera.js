import React from 'react';
import { Text, View, TouchableOpacity, CameraRoll } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    cameraRollUri: null,  
  };

  async componentWillMount() {
    const cameraPermission = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (cameraPermission.status === 'granted' && cameraRollPermission.status === 'granted') {
      this.setState({ hasCameraPermission: true });
    }
  }

  snap = async () => {
    console.log('snap')
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({base64:true});
      const form = {
        "requests": [
          {
            "image": {
              "content": photo.base64
            },
            "features": [
              {
                "type": "IMAGE_PROPERTIES"
              }
            ]
          }
        ]
      }
      const api_key = ""; // fill in google cloud api key
      let res = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${api_key}`, {
        method: 'POST',
        body: JSON.stringify(form),
      }).then(res => res.json())
      console.log(res)
      let saveResult = await CameraRoll.saveToCameraRoll(photo.uri, 'photo');
      console.log(saveResult)
      // this.setState({ cameraRollUri: saveResult });
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (!hasCameraPermission) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}>
              {/* <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                style={{
                  marginBottom: 20,
                }}
                onPress={this.snap}>
                <View
                  style={{ alignSelf: 'center',
                  alignItems: 'center', width: 65, height: 65, borderRadius: 65/2, backgroundColor: 'white', borderStyle: 'solid', borderColor: '#ccc', borderWidth: 5, opacity: 0.8,}}>
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}