import React, { Component } from 'react';
import{
	AppRegistry, // Registers the App
	StatusBar, //Allows us the hide the status bar
} from 'react-native'

import Screens from './Screens';

export default class Onboarding extends Component {
	compondnetDidMount(){
		StatusBar.setHidden(true);
	}
	render(){
		return(
			<Screens goToPhotos={this.props.goToPhotos}/>
		);
	}
}

AppRegistry.registerComponent('Onboarding', () => Onboarding);