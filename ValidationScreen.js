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
          isClear: true,
          isBright: true,
          hasDog: true,
          breed: "Dog"
        }
  
      return (
      <View style ={styles.container}>
      <View style = {styles.header}>
      <ValidationScreenTop></ValidationScreenTop>
      </View>
     
      
      <View style = {styles.imageContainer}>
      <Image  style = {styles.image } source={this.props.img} ></Image>
      </View>

      <View style = {styles.imageContainer}>
        <Validation validationResponse = {valRes}></Validation>
      </View>
      </View>
     
      
      
      
        
        
      );
        
    }
    
  }

  const styles = StyleSheet.create({
    // Slide styles
    
    imageContainer:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative'
    },
    image:{
      height: 300,
      width: 500
    },
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    // Header styles
    header: {
      height: 100,
      
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    
   });