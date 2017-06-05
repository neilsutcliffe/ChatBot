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
        <Text>MayBot 6000</Text>
      </View>
    )
  }
}


const colours = {
  backgroundMain: '#FAFAFA',
  messageLocal: '#027BFD',
  messageRemote: '#E6E5EB',
  headerColour: '#F3F4F6'
}

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colours.backgroundMain
  },
  header: {
    backgroundColor: colours.headerColour,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


AppRegistry.registerComponent('ChatBot', () => App);
