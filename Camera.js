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
      let photo = await this.camera.takePictureAsync({});
      this.props.addPhoto(photo.uri);
      // const form = {
      //   "requests": [
      //     {
      //       "image": {
      //         "content": photo.base64
      //       },
      //       "features": [
      //         {
      //           "type": "IMAGE_PROPERTIES"
      //         }
      //       ]
      //     }
      //   ]
      // }
      // const api_key = ""; // fill in google cloud api key
      // let res = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${api_key}`, {
      //   method: 'POST',
      //   body: JSON.stringify(form),
      // }).then(res => res.json())
      // console.log(res)
      // let saveResult = await CameraRoll.saveToCameraRoll(photo.uri, 'photo');
    //  console.log(saveResult)
      // this.setState({ cameraRollUri: saveResult });
      // let flask_res = await fetch('http://192.168.10.101:5000/opencv_analyze', {
      //   method: 'POST',
      // }).then(res => console.log(res))
      // console.log(flask_res)
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
                  marginBottom: 15,
                }}
                onPress={this.snap}>
                <View
                  style={{ alignSelf: 'center',
                  alignItems: 'center', width: 60, height: 60, borderRadius: 30, backgroundColor: '#FA770B'}}>
                </View>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}