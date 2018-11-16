import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import pass from './assets/pass.png';
import fail from './assets/fail.png'


export default class BestFriendsApp extends React.Component {
constructor(props){
    super(props);
    this.state = {
        goodLighting: false,
        faceCentered: false,
        focus: false
      };
}
  componentDidMount(){
    this.validateImage();
  }
  
  saveImage = () => {
    console.log("Saved the Image Boiiiii");
  }

  validateImage = () => {
    let pic = this.props.pic
    var response = {
      fileName: "Name",
      isClear: false,
      isBright: false,
      hasDog: false,
      breed: "Dog"
    }
    this.setState({
      goodLighting: false,
      faceCentered: false,
      focus: false
    });
  }

  render() {
    console.log("This is Normal Text")
    console.log(this.state.goodLighting);
    let goodLighting = (<Image  source = {fail}/>);
    let faceCentered =(<Image  source = {fail}/>);
    let focused =(<Image  source = {fail}/>);

    if(this.state.goodLighting){
      goodLighting = (<Image source = {pass}/>)
    }
    if(this.state.faceCentered){
      faceCentered = (<Image source = {pass}/>)
    }
    if(this.state.focus){
      focused = (<Image source = {pass}/>)
    }
    return (
      <View>
        <View>
      <Text>GoodLighting</Text>
      {goodLighting}
      </View>

      <View>
        <Text>Face Centered</Text>
        {faceCentered}
      </View>


      <View>
        <Text>Focused</Text>
        {focused}
      </View>
      <Button title ="Upload Image" onPress= {this.saveImage}></Button>
      </View>
      
    );
      
  }
  
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});


