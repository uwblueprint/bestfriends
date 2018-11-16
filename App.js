import React from 'react';
import CameraExample from './Camera';
import Onboarding from './Onboarding';
import Validation from './Validation';

export default class BestFriendsApp extends React.Component {
  state = {
    screen: 'onboarding',
  };

  openCamera = () => {
    this.setState({screen: 'camera'})
  }

  render() {
    return (
      <Validation></Validation>
    );
      
  }
  
}


