import React from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'
export default class ValidationScreenTop extends React.Component {
  constructor(props){
      super(props)
  }
  
  //ADD CODE HERE FOR NAVIGATION LOGIC 
  navigateBack = () =>{
      console.log("This will take you back ")
  }

  //ADD CODE HERE FOR NAVIGATION LOGIC 
  navigateFinish = () =>{
      console.log("This will finish the thing")
  }
  

  render() {
    return (
    <View style = {styles.container}>
        <View>
            <TouchableOpacity onPress = {this.navigateBack()}>
                <Icon name = "cancel"/>
            </TouchableOpacity>
            
        </View>
            <Text>Save Your Photos</Text>
        <View style = {styles.circle}>
            <Text style = {styles.textStyle} >4</Text>
        </View>
        <TouchableOpacity onPress = {this.navigateFinish()}>
            <Text style = {styles.finishText}>Finish</Text>
        </TouchableOpacity>
        
    </View>
      
    );
      
  }
  
}
const styles = StyleSheet.create({
    // Slide styles
    circle: {
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: '#ffa500',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textStyle:{
        color:  '#FFFFFF'

      },
      finishText: {
          color: '#ffa500'
      },
      container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
        position: 'absolute'
      },
   
   });