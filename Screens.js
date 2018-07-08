import React, { Component } from 'react';
import Button from './Button';
import Swiper from './Swiper';
import {
  StyleSheet,   // CSS-like styles
  Text,         // Renders text
  View          // Container component
} from 'react-native';

export default class Screens extends Component {
  render() {
    return (
        <Swiper>
        {/* First screen */}
        <View style={[styles.slide, { backgroundColor: '#C04DEE' }]}>
          <Text style={styles.header}>Screen1</Text>
          <Text style={styles.text}>Onboarding1</Text>
        </View>
       {/* Second screen */}
        <View style={[styles.slide, { backgroundColor: '#4AAFEE' }]}>
          <Text style={styles.header}>Screen2</Text>
          <Text style={styles.text}>Onboarding2</Text>
        </View>
        {/* Third screen */}
        <View style={[styles.slide, { backgroundColor: '#FC515B' }]}>
          <Text style={styles.header}>Screen3</Text>
          <Text style={styles.text}>Onboarding3</Text>
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