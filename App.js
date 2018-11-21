import React from 'react';
import CameraExample from './Camera';
import Onboarding from './Onboarding';
import ValidationScreen from './ValidationScreen';

export default class BestFriendsApp extends React.Component {
  state = {
    screen: 'onboarding',
  };

  openCamera = () => {
    this.setState({screen: 'camera'})
  }

  render() {
    return (
      <ValidationScreen img ={require('./onboarding3.png')}></ValidationScreen>
    );
      
  }
  
}


