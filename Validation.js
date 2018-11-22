import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';

export default class Validation extends React.Component {
  width = Dimensions.get('window').width;
  
  render() {
    return (
      <View>
        {console.log(this.props.photos)}
        <View style={{ flexDirection: "row", justifyContent: "space-between", height: 50, marginLeft: 5, marginRight: 5 }}>
          <TouchableOpacity style={styles.navbarButton}>
            <Text style={{ color: "#333333", fontWeight: "bold" }}>Tips</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#333333", margin: 15 }}>0</Text>
            <TouchableOpacity style={styles.navbarButton}>
              <Text style={{ color: "#FA770B", fontWeight: "bold" }}>Finish</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerStyle={{padding: 5}}>
          <Text style={styles.header}>The ones we like</Text>
          <View style={styles.gallery}>
            {this.props.photos.map((elem, key) => 
              <Image style={styles.image} source={{uri: elem}}/>)}
            
          </View>
          <Text style={styles.header}>Other photos you took</Text>
          <View style={styles.gallery}>
            {this.props.photos.map((elem, key) => 
              <Image style={styles.image} source={{uri: elem}}/>)}
          </View>
        </ScrollView>

      </View>
    );
  }
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  navbarButton: {
    margin: 15,
  },
  header: {
    fontSize: 18,
  },
  gallery: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  image: {
    width: (width - 25) / 3,
    height: (width - 25) / 3,
    margin: 2.5,
  }
})