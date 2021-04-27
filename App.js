import React from 'react';
import { ImagePropTypes, StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/appTabNavigator'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default function App() {
  return (
    <AppContainer/>
  );
}
const SwitchNavigator = createSwitchNavigator({
  welcome:{screen:WelcomeScreen},
  bottomTab:{screen:AppTabNavigator}
})
const AppContainer = createAppContainer(SwitchNavigator)
