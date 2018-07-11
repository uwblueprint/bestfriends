import React, { Component } from 'react';

import Button from './Button';
import Swiper from './Swiper';
import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View,
  Image          // Container component
} from 'react-native';

export default class Screens extends Component {
  render() {
    return (
        <Swiper>
        {/* First screen */}
        <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
        <View  style={{flex:1}}>
        <Image   style={styles.image} source={require('./onboarding1.jpg')}/>
        <Text style = {styles.header}>Focus</Text>
        <Text>Make sure that the pet is facing the camera and is in the center of the frame for the best results</Text>
        </View>
        </View>
       {/* Second screen */}
       <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
        <View  style={{flex:1}}>
        <Image   style={styles.image} source={require('./onboarding2.png')}/>
        <Text style = {styles.header}>Lighting</Text>
        <Text>Find a location for the photoshoot where the sun is not facing you nor is too dark</Text>
        </View>
        </View>
        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
        <View  style={{flex:1}}>
        <Image   style={styles.image} source={require('./onboarding3.png')}/>
        <Text style = {styles.header}>Calm</Text>
        <Text>Make sure the pet is relaxed and not agitated before the photoshoot happens</Text>
        </View>
        </View>
        {/* Forth Screen */}
        <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
        <View  style={{flex:1}}>
        <Image   style={styles.image} source={require('./onboarding4.png')}/>
        <Text style = {styles.header}>Examples</Text>
        <Text>Good pictures like these will make sure the pets get adopted</Text>
        </View>
        </View>
      </Swiper>

    );
  }
}

const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1,                    // Take up all screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  image:{
  width: 250,
  height: 250,
  position: 'relative',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  },
  // Header styles
  header: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  // Text below header
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: 'center',
  },
});