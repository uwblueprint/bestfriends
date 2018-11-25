import React from 'react';
import CameraExample from './Camera';
import Onboarding from './Onboarding';
import ValidationScreen from './ValidationScreen';
import ValidationScreenTop from './ValidationScreenTop';
import { FormValidationMessage } from 'react-native-elements';

export default class BestFriendsApp extends React.Component {
  state = {
    screen: 'onboarding',
  };

  openCamera = () => {
    this.setState({screen: 'camera'})
  }

  /*  */
  render() {
    return (
     
      <ValidationScreen img ={require('./onboarding3.png')}></ValidationScreen>
    );
      
  }
  
}


