import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import pass from './assets/pass.png';
import fail from './assets/fail.png'
import Button from './Button';


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
    let goodLighting = (<Image  style = {styles.icon} source = {fail}/>);
    let faceCentered =(<Image  style = {styles.icon} source = {fail}/>);
    let focused =(<Image style = {styles.icon} source = {fail}/>);

    if(this.state.goodLighting){
      goodLighting = (<Image style = {styles.icon} source = {pass}/>)
    }
    if(this.state.faceCentered){
      faceCentered = (<Image  source = {pass}/>)
    }
    if(this.state.focus){
      focused = (<Image  source = {pass}/>)
    }
    return (
      <View style = {styles.canvas}>
         <View style={{flex: 1, flexDirection: 'row'}}>
          {goodLighting}
          <Text>GoodLighting</Text>
          </View>  
        <View style = {{flex: 1, flexDirection: 'row'}}>
        {faceCentered}
        <Text>Face Centered</Text>
      </View>
      <View style = {{flex:1, flexDirection: 'row'}}>
        {focused}
        <Text>Focused</Text>
      </View>
      
      <Button text = {"select"}></Button>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 15,
    width: 15,
    right: 6,
    top: 4
  }

  
});


