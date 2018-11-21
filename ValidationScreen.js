import React from 'react';
import Validation from './Validation';
import {Image, View, StyleSheet, Text} from 'react-native';

export default class BestFriendsApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            screen: 'onboarding',
          };
    }
    
  
    render() {
      return (
        <View>
        
        <Image source={this.props.img} ></Image>
        <Validation></Validation>
        </View>
        
      );
        
    }
    
  }

  const styles = StyleSheet.create({
    // Slide styles
    
    image:{
      flex:1,
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