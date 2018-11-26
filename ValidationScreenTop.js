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

        <View style = {{flex:1, flexDirection: 'row',alignSelf: 'flex-start'}}> 
            <TouchableOpacity onPress = {this.navigateBack()}>
                <Icon name = "cancel"/>
            </TouchableOpacity>
        </View>

        <View style = {{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
            <Text>Save Your Photos</Text>
        </View>
        
        <View style = {{flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent : 'center', left: 20}}>
            <View style = {styles.circle}>
                <Text style = {styles.textStyle} >4</Text>
            </View>
            <TouchableOpacity onPress = {this.navigateFinish()}>
                <Text style = {styles.finishText}>Finish</Text>
            </TouchableOpacity>
        </View>
        
        
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
        right: 4
      },
      textStyle:{
        color:  '#FFFFFF',
      },
      savePhotos:{
        fontSize: 15,
        
      },
      finishText: {
          color: '#ffa500'
      },
      container: {
        flex: 1,
        flexDirection : 'row',
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center'
      },
   
   });