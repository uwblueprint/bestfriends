import React from 'react';
import { AsyncStorage } from 'react-native';
import Onboarding from './Onboarding';
import Photos from './Photos';
import Validation from './Validation'

export default class BestFriendsApp extends React.Component {

  constructor(props) {
    super(props);
    this.onOnboardingComplete = this.onOnboardingComplete.bind(this);
  }

  state = {
    onboarded: null,
    page: "photos",
    photos: null,
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

  validate = (photos) => {
    // make request
    this.setState({page: "validate", photos: photos});
  }

  render() {
    if (this.state.onboarded === null) {
      return null;
    } else if (this.state.onboarded === false) {
      return <Onboarding onComplete={() => this.onOnboardingComplete()}></Onboarding>;
    } else {
      if (this.state.page === "photos") {
        return <Photos validate={this.validate}></Photos>;
      } else if (this.state.page === "validate") {
        return <Validation photos={this.state.photos}></Validation>
      }
    }
  }
}


