import React from 'react';
import CameraExample from './Camera';
import Onboarding from './Onboarding';
import {
  creatStackNavigator,
  
} from 'react-navigation';

const navigator = creatStackNavigator({
  Home:{
    screen: CameraExample
  },
  
})

export default class BestFriendsApp extends React.Component {

  render() {
    return <navigator/>
  }
  
}


