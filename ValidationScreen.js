import React from 'react';
import Validation from './Validation';
import {Image, View, StyleSheet, Text} from 'react-native';
import Button from './Button';
import ValidationScreenTop from './ValidationScreenTop';
export default class BestFriendsApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            screen: 'onboarding',
          };
    }
    

    render() {
      var valRes ={
          fileName: "Name",
          isClear: false,
          isBright: true,
          hasDog: true,
          breed: "Dog"
        }
      
      return (
        <View>
        <View>
        <ValidationScreenTop></ValidationScreenTop>
        </View>
         <Image source={this.props.img} ></Image>
        <View>
        <Validation validationResponse = {valRes}></Validation>
        </View> 
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