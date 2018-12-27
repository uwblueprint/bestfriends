import React from 'react';
import { AsyncStorage } from 'react-native';
import Onboarding from './Onboarding';
import Photos from './Photos';
import Validation from './Validation';

/* This is a temporary backend endpoint that will simulate a real 
 * request and response 
 */
const VALIDATION_API_URI = 'http://ec2-54-164-18-2.compute-1.amazonaws.com/verify';

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
    let formData = new FormData();
    for (let uri of photos) {
      console.log({ uri });
      formData.append(uri, { uri, name: uri, type: 'image/jpeg' });
    }
    fetch(VALIDATION_API_URI, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
     })
    .then((response) => response.json())
    .then((responseJson) => {
      // Perform success response.
      this.setState({ page: "validate", photos: responseJson });
      console.log(responseJson);
    })
    .catch((error) => {
        console.log(error);
    });
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


