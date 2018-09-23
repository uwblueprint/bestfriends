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
       <View style={[styles.slide, { backgroundColor: '#FFFFFF' }]}>
       <View style={{flex:1}}>
       <Image style={styles.image} source={require('./onboarding1.jpg')}/>
       <Text style = {styles.header}>FOCUS</Text>
       <Text style = {styles.text}>Make sure that the pet is facing the camera and is in the center of the frame for the best results</Text>
       </View>
       </View>
      {/* Second screen */}
      <View style={[styles.slide, { backgroundColor: '#FFFFFF' }]}>
       <View  style={{flex:1}}>
       <Image   style={styles.image} source={require('./onboarding2.png')}/>
       <Text style = {styles.header}>LIGHTING</Text>
       <Text style = {styles.text}>Find a location for the photoshoot where the sun is not facing you nor is too dark</Text>
       </View>
       </View>
       {/* Third screen */}
       <View style={[styles.slide, { backgroundColor: '#FFFFFF' }]}>
       <View style={{flex:1}}>
       <Image style={styles.image} source={require('./onboarding3.png')}/>
       <Text style = {styles.header}>CALM</Text>
       <Text style = {styles.text}>Make sure the pet is relaxed and not agitated before the photoshoot happens</Text>
       </View>
       </View>
       {/* Forth Screen */}
       <View style={[styles.slide, { backgroundColor: '#FFFFFF' }]}>
       <View style={{flex:1}}>
       <Image style={styles.image} source={require('./onboarding4.png')}/>
       <Text style = {styles.header}>EXAMPLES</Text>
       <Text style = {styles.text}>Good pictures like these will make sure the pets get adopted</Text>
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
   height: 330,
   width: 330,
   position: 'relative',
 },
 // Header styles
 header: {
   color: '#000000',
   fontSize: 30,
   fontWeight: 'bold',
   marginVertical: 15,
   textAlign: 'center',
 },
 // Text below header
 text: {
   color: '#000000',
   fontSize: 18,
   marginHorizontal: 40,
   textAlign: 'center',
 },
});