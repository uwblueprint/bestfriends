import React from 'react';
import Onboarding from './Onboarding';
import Photos from './Photos';

export default class BestFriendsApp extends React.Component {
  state = {
    screen: 'onboarding',
  };

  goToPhotos = () => {
    this.setState({screen: 'photos'})
  }

  render() {
    return (
      this.state.screen == 'onboarding' ? 
        <Onboarding goToPhotos={this.goToPhotos}></Onboarding> : 
        <Photos></Photos>
    );
      
  }
  
}


