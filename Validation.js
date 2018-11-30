import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import ValidationPhoto from './ValidationPhoto';
import { MediaLibrary } from 'expo';

export default class Validation extends React.Component {
  state = {
    photos: []
  }

  addPhoto = (photo) => {
    if (this.state.photos.includes(photo)) {
      this.setState({photos: this.state.photos.filter((elem) => elem != photo)});
    } else {
      this.setState({photos: [...this.state.photos, photo]});
    }
  }

  savePhotos = async () => {
    const asset = await MediaLibrary.createAssetAsync(this.state.photos[0]);
    MediaLibrary.createAlbumAsync('Best Friends', asset)
      .then(() => {
        console.log('Album created!');
      })
      .catch(error => {
        console.log('err', error);
      });
    // const asset = await MediaLibrary.createAssetAsync(this.photos[0]);
    // MediaLibrary.createAlbumAsync('Expo', asset)
   // MediaLibrary.addAssetsToAlbumAsync(this.photos, 'Expo').then(() => console.log("saved"))
  }
  
  render() {
    return (
      <View>
        {console.log(this.props.photos)}
        <View style={{ flexDirection: "row", justifyContent: "space-between", height: 50, marginLeft: 5, marginRight: 5 }}>
          <TouchableOpacity style={styles.navbarButton}>
            <Text style={{ color: "#333333", fontWeight: "bold" }}>←</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#333333", margin: 15 }}>{this.state.photos.length}</Text>
            <TouchableOpacity style={styles.navbarButton} onPress={this.savePhotos}>
              <Text style={{ color: "#FA770B", fontWeight: "bold" }}>Finish</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerStyle={{padding: 5}}>
          <Text style={styles.header}>The ones we like</Text>
          <View style={styles.gallery}>
            {this.props.photos.map((elem, key) => 
              <ValidationPhoto photo={elem} addPhoto={this.addPhoto}></ValidationPhoto>)}
          </View>
          <Text style={styles.header}>Other photos you took</Text>
          <View style={styles.gallery}>
            {this.props.photos.map((elem, key) => 
              <ValidationPhoto photo={elem} addPhoto={this.addPhoto}></ValidationPhoto>)}
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
  },
  marker: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'transparent',
    width: 25,
    height: 25
  },
})