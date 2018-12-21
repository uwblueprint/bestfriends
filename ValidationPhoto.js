import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';

// component for individual photo on validation page
export default class ValidationPhoto extends React.Component {
  state = {
    selected: this.props.selected
  }
  
  select = () => {
    this.props.addPhoto(this.props.photo.uri) // add photo to array in parent component
    this.setState({selected: !this.state.selected}); // show selected marker
  }

  render() {
    return (
      <View>
        <Image style={styles.image} source={{uri: this.props.photo.uri}}/>
        <TouchableOpacity style={styles.view} onPress={this.select}>
          {this.state.selected ? <Image style={styles.selected} source={require("./assets/selected.png")}/> : null}
          <TouchableOpacity style={styles.expandButton} onPress={this.props.expand.bind(this, this.props.photo)}>
            <Image style={styles.expand} source={require("./assets/expand.png")}/>
          </TouchableOpacity>
        </TouchableOpacity>
        </View>
    )
  }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    width: (width - 25) / 3,
    height: (width - 25) / 3,
    margin: 2.5,
  },
  view: {
    width: (width - 25) / 3,
    height: (width - 25) / 3,
    margin: 2.5,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  selected: {
    top: 8,
    left: 8,
    backgroundColor: 'transparent',
    width: 20,
    height: 20
  },
  expand: {
    backgroundColor: 'transparent',
    width: 20,
    height: 20,
    zIndex: 200
  },
  expandButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 20,
    height: 20,
  }
})