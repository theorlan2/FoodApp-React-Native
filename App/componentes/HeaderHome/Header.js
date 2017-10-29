
// @flow

import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import h1Styles from './styles'


export default class Header extends Component {

constructor(props){
  super(props)
}

render() {
  return (
    <View style={h1Styles.contenedor} >

    <View style={h1Styles.vContenedor} >
<TouchableOpacity style={h1Styles.touchContenedor} >

</TouchableOpacity>
 </View>

 <View style={h1Styles.tituloCont}>
   <Text style={h1Styles.tituloText} > INICIO </Text>
 </View>




</View>

   )// fin Return
 } // Fin Render
}
