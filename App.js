import React from 'react';
import CameraExample from './Camera';
import Onboarding from './Onboarding';

export default class BestFriendsApp extends React.Component {
  state = {
    screen: 'onboarding',
  };

  openCamera = () => {
    this.setState({screen: 'camera'})
  }

  render() {
    return (
      this.state.screen == 'onboarding' ? 
      <Onboarding openCamera={this.openCamera}></Onboarding> : 
      <CameraExample></CameraExample>
    );
      
  }
  
}


