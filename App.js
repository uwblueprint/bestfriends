import React from 'react';
import 'expo';
import { StyleSheet, Text, View } from 'react-native';
import TextInANest from './Components/Onboarding';
import Onboarding from './Onboarding';

export default class App extends React.Component {
  render() {
  	//Change for Merge 
    return (

      <View style={styles.container}> 
        <Onboarding></Onboarding>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
