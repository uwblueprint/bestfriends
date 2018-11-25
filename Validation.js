import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import pass from './assets/pass.png';
import fail from './assets/fail.png'
import Button from './Button';


export default class BestFriendsApp extends React.Component {
constructor(props){
    super(props);
    this.state = {
        goodPhoto: false
      };
}

  componentDidMount(){    
    console.log(this.props.validationResponse)
    this.isGoodPhoto();
  }
  
 
  /*
  ADD CODE HERE TO SAVE IMAGES TO BACK END 
  */
  saveImage = () => {
    console.log("Saved the Image Boiiiii");
  }

  //If all 3 are true then the button will be changed to the appropriate colour scheme
  isGoodPhoto = () => {
    if(this.props.validationResponse.isClear
    && this.props.validationResponse.isBright
    && this.props.validationResponse.hasDog){
      this.setState({
        goodPhoto: true
      })
    }
  }

  render() {
    //Logic for if a check mark or x should be displayed
    let goodLighting = (<Image  style = {styles.icon} source = {fail}/>);
    let faceCentered =(<Image  style = {styles.icon} source = {fail}/>);
    let focused =(<Image style = {styles.icon} source = {fail}/>);
    let button = (<Button goodPhoto = {this.state.goodPhoto} text = {"select"}></Button>)

    if(this.props.validationResponse.isBright){
      goodLighting = (<Image style = {styles.icon} source = {pass}/>)
    }

    if(this.props.validationResponse.hasDog){
      faceCentered = (<Image style = {styles.icon} source = {pass}/>)
    }

    if(this.props.validationResponse.isClear){
      focused = (<Image style = {styles.icon} source = {pass}/>)
    }

    return (
      <View style = {styles.canvas}>
        <View style = {{flex:1,flexDirection:'column'}}>
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
        </View>
        <View style = {{flex:1, flexDirection: 'column'}}>
          {button}
        </View>
        
      </View>
      
      
    );
      
  }
  
}

var styles = StyleSheet.create({
  canvas: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
    
  },
  icon: {
    height: 15,
    width: 15,
    right: 6,
    top: 4
  },
  selectButton:{
    backgroundColor:'#FFFFFF'
  }
  

  
});


