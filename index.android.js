/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView 
} from 'react-native';


import { Provider } from 'react-redux';
import MainStore from './store/store.js';
import MainActions from './store/actions.js';
import Chat from './components/chat.js';

import colours from './styles/colours.js'

const mainStore = MainStore();


export default class App extends Component {
  render() {
    return (
      <Provider store={mainStore}>
        <Layout />
      </Provider>
    );
  }
}

class Layout extends Component {
  render() {
    return (
       <View style={mainStyles.container}>
        <Header />
        <Chat />
      </View>
    )
  }
}


class Header extends Component {
  render() {
    return (
      <View style={mainStyles.header}>
        <Text style={mainStyles.headerText}>MayBot 6000</Text>
      </View>
    )
  }
}



const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colours.backgroundMain
  },
  header: {
    backgroundColor: colours.toryBlue,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    color: colours.troyBlueContrast
  }
});


AppRegistry.registerComponent('ChatBot', () => App);
