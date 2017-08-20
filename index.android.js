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
  StatusBar,
  Image,
  ScrollView,
  View
} from 'react-native';

import  HomeScreen  from './App/views/HomeScreen'
import  DetailScreen  from './App/views/DetailScreen'

import { StackNavigator } from 'react-navigation';


const FoodApp = StackNavigator({
  Home:{
    screen:HomeScreen,
  },
  Detalles:{
    screen:DetailScreen,
  },
},
  {  headerMode: 'none' }
)



AppRegistry.registerComponent('FoodApp', () => FoodApp);
