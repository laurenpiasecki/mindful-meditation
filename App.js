import Expo from 'expo';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import picMed from './assets/meditation.png';
import picNature from './assets/nature.png';
import picMusic from './assets/music.png';

//import * as firebase from 'firebase';

/* var config = {
    apiKey: "AIzaSyACMUTTZGS7mFNH2Q5rLq0NugzBFS6bdn4",
    authDomain: "flowing-goods-162919.firebaseapp.com",
    databaseURL: "https://flowing-goods-162919.firebaseio.com",
    projectId: "flowing-goods-162919",
    storageBucket: "flowing-goods-162919.appspot.com",
    messagingSenderId: "111880619847"
  };
firebase.initializeApp(config); */

export class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
	  <Image style={styles.pic} source={picMed} />
	  <Text style={styles.defaultText}>Mindful Meditation</Text>
	  <Image style={styles.pics} source={picNature} />
	  <Text style={styles.defaultTexts}>Nature</Text>
	  <Image style={styles.pics} source={picMusic} />
	  <Text style={styles.defaultTexts}>Music</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	defaultText: {
		fontSize:26,
		padding: 10,
		margin:5,
		borderRadius: 4, 
		borderWidth: 2,
		color: 'black',
	}, 
	defaultTexts: {
		fontSize:20,
		padding: 10,
		borderRadius: 4, 
		borderWidth: 2,
		color: 'black',
	}, 
	container: {
		flex: 1,
		backgroundColor: '#BAFFC7',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	pic: {
		marginTop: 10,
		alignItems: 'center',
		height: 150,
		width: 150
	},
	pics: {
		width: 75,
		height: 75,
		resizeMode: 'contain'
	}
});

Expo.registerRootComponent(App);
export default App;