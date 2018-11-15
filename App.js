import React from 'react';
import { AsyncStorage } from 'react-native';
import CameraExample from './Camera';
import Onboarding from './Onboarding';

export default class BestFriendsApp extends React.Component {

  constructor(props) {
    super(props);
    this.onOnboardingComplete = this.onOnboardingComplete.bind(this);
  }

  state = {
    onboarded: null,
  };

  componentDidMount() {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        this.setState({ onboarded: false });
      } else {
        this.setState({ onboarded: true });
      }
    });
  }

  onOnboardingComplete() {
    this.setState({ onboarded: true });
    AsyncStorage.setItem('alreadyLaunched', 'true');
  }

  render() {
    if (this.state.onboarded === null) {
      return null;
    } else if (this.state.onboarded === false) {
      return <Onboarding onComplete={() => this.onOnboardingComplete()}></Onboarding>;
    } else {
      return <CameraExample></CameraExample>;
    }
  }
}


