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
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';

import  Header  from '../componentes/Header'
import  styles  from '../styles/index.styles'
import Carousel from 'react-native-snap-carousel';

export default class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            backgroundColor='#fffdfa'
            barStyle="dark-content"
          />
  <Header />

  <ScrollView style={styles.scrollCont} >


<TouchableOpacity onPress={ ()=>this.props.navigation.navigate('Detalles') } >
  <Text >Abrir Detalles</Text>
</TouchableOpacity>

</ScrollView>
<View
style={styles.contenedorDetalles}
   >
   


</View>
      </View>
    );
  }
}
