import React, { Component } from 'react';
import {
  StyleSheet,       // CSS-like styles
  Text,             // Renders text
  TouchableOpacity, // Pressable container
  View              // Container component
} from 'react-native';

export default class Button extends Component {
  render({ onPress } = this.props) {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  // Button container
  button: {
    borderRadius: 50,        
    borderWidth: 2,           
    borderColor: '#FFFFFF',   
    paddingHorizontal: 50,    
    paddingVertical: 10,      
  },
  // Button text
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});