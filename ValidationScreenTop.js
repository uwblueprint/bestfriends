import React from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'
export default class ValidationScreenTop extends React.Component {
  constructor(props){
      super(props)
  }

  render() {
    return (
    <View style = {styles.container}>

        <View style = {{flex:1, flexDirection: 'row',alignSelf: 'center'}}> 
            <TouchableOpacity onPress = {this.props.navigateBack}>
                <Image style = {styles.cancelIcon} source = {require('./assets/close.png')}></Image>
            </TouchableOpacity>
        </View>

        <View style = {{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
            <Text>Save Your Photos</Text>
        </View>
        
        <View style = {{flex: 1, flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent : 'center', left: 20}}>
            <View style = {styles.circle}>
                <Text style = {styles.textStyle} >{this.props.numPhotos}</Text>
            </View>
            <TouchableOpacity style={{margin: 15}} onPress = {this.props.navigateFinish}>
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
        height: 25,
        width: 25,
        borderRadius: 25,
        backgroundColor: '#FA770B',
        zIndex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      },
      cancelIcon:{
        height: 20,
        width: 20
      },
      textStyle:{
        color:  '#FFFFFF',
      },
      savePhotos:{
        fontSize: 15,
        
      },
      finishText: {
          color: '#FA770B',
          fontWeight: "bold"
      },
      container: {
        flexDirection : 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        height: 50,
      },
   
   });