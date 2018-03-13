import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
// import HitungVolumeBalok from './src/HitungVolumeBalok';
import Header from './src/comp/Header';
import Footer from './src/comp/Footer';
import Sales from './src/comp/Sales';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <Header headerText={'Header'} />
        <Sales />
        <Footer footerText={'Footer'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#2196F3'
  }
})

AppRegistry.registerComponent('HadiKurniawan', () => App);
