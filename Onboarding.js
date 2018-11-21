import React, { Component } from 'react';
import{
	AppRegistry, // Registers the App
	StatusBar, //Allows us the hide the status bar
	Image,
	View,
	Text,
	StyleSheet,
} from 'react-native'
import Button from './Button';

export default class Onboarding extends Component {
	compondnetDidMount(){
		StatusBar.setHidden(true);
	}
	render(){
		return(
			<View style={styles.obContainer}>
				<Image style={styles.obImage} source={require('./assets/onboarding.png')}/>
				<Text style={styles.obText}>Get started to begin taking amazing photos for the pets!</Text>
				<Button text="Get Started" onPress={this.props.onComplete}></Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	obContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FA770B',
		paddingHorizontal: 60,
		paddingBottom: 30,
	},
	obText: {
		fontSize: 24,
		color: 'white',
		letterSpacing: 1.18,
		marginBottom: 57,
	},
	obImage: {
		width: 270,
		height: 270,
	},
});

AppRegistry.registerComponent('Onboarding', () => Onboarding);