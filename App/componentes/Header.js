
// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Svg,{  Path,G, } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

import h1Styles from '../styles/header1.styles'


export default class Header extends Component {

constructor(props){
  super(props)
}

render() {
  return (
    <View style={h1Styles.contenedor} >

    <View style={h1Styles.vContenedor} >
<TouchableOpacity style={h1Styles.touchContenedor} >
<Svg
  viewBox="0 0 31.494 31.494" width={26} height={26}
   >
<Path
  d="M10.273 5.01c.444-.445 1.143-.445 1.587 0 .43.428.43 1.142 0 1.57l-8.047 8.047h26.554c.62 0 1.127.492 1.127 1.11 0 .62-.508 1.128-1.127 1.128H3.813l8.047 8.032c.43.444.43 1.16 0 1.587-.444.444-1.143.444-1.587 0L.32 16.532c-.428-.43-.428-1.143 0-1.57l9.953-9.953z"
  fill="#ffb041"
/>
</Svg>
</TouchableOpacity>
 </View>

 <View style={h1Styles.tituloCont}>
   <Text style={h1Styles.tituloText} > INICIO </Text>
 </View>




</View>

   )// fin Return
 } // Fin Render
}
