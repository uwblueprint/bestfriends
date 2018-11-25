import React, { Component } from 'react';
import {
  StyleSheet,       // CSS-like styles
  Text,             // Renders text
  TouchableOpacity, // Pressable container
  View              // Container component
} from 'react-native';

export default class Button extends Component {
  render({ onPress } = this.props) {
    
    var buttonView = (<View style={styles.badButton}>
      <Text style={styles.badText}>{this.props.text.toUpperCase()}</Text>
      </View>);
    console.log("Is this good Photo", this.props.goodPhoto);
    if(this.props.goodPhoto) {
     buttonView = (<View style={styles.goodButton}>
      <Text style={styles.goodText}>{this.props.text.toUpperCase()}</Text>
      </View>);
    } 

    return (
      <TouchableOpacity onPress={onPress}>
        {buttonView}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  // BadButton container
  badButton: {
    borderRadius: 50,        
    borderWidth: 2,           
    borderColor: '#ffa500',   
    paddingHorizontal: 50,    
    paddingVertical: 10,   
    backgroundColor: '#FFFFFF'   
  },
  // BadButton text
  badText: {
    color:  '#ffa500',
    fontWeight: 'bold',
  },
  //goodButton Container
  goodButton: {
    borderRadius: 50,        
    borderWidth: 2,           
    borderColor: '#ffa500',   
    paddingHorizontal: 50,    
    paddingVertical: 10,
    backgroundColor: '#ffa500'
  },

  //goodButton Text
  goodText: {
    color:  '#FFFFFF',
    fontWeight: 'bold',
  },
});