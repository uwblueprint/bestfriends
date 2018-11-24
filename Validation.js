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
  
  saveImage = () => {
    console.log("Saved the Image Boiiiii");
  }
//comment
  isGoodPhoto = () => {
    if(this.props.validationResponse.goodLighting
    && this.props.validationResponse.faceCentered
    && this.props.validationResponse.focus){
      this.setState({
        goodPhoto: true
      })
    }
  }

  render() {
    console.log("This is Normal Text")
    console.log(this.props.validationResponse.goodLighting);
    let goodLighting = (<Image  style = {styles.icon} source = {fail}/>);
    let faceCentered =(<Image  style = {styles.icon} source = {fail}/>);
    let focused =(<Image style = {styles.icon} source = {fail}/>);
    let button = (<Button text = {"select"}></Button>)

    if(this.props.validationResponse.isBright){
      goodLighting = (<Image style = {styles.icon} source = {pass}/>)
    }

    if(this.props.validationResponse.hasDog){
      faceCentered = (<Image  source = {pass}/>)
    }

    if(this.props.validationResponse.isClear){
      focused = (<Image  source = {pass}/>)
    }

    if(this.state.goodPhoto){
      button = (<Button style = {styles.selectButton} text = {"select"}></Button>)
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
      {button}
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
  },
  selectButton:{
    backgroundColor:'#FFFFFF'
  }
  

  
});


