import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';
import { Icon } from 'react-native-elements'
export default class ValidationScreenTop extends React.Component {
  constructor(props){
      super(props)
  }

  

  render() {
    return (
    <View style = {styles.container}>
        <View>
            <Icon name = "cancel"/>
        </View>
            <Text>Save Your Photos</Text>
        <View style = {styles.circle}>
            <Text style = {styles.textStyle} >4</Text>
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
      },
      textStyle:{
        color:  '#FFFFFF'

      },
      container: {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        position: 'absolute'
      },
   
   });