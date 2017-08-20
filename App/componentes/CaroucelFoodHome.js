
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

import Svg,{  Path,G,Circle } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/Caroucel.styles'

const ListImages = {
'food-1.jpg': require('../static/img/food-1.jpg'),
'food-2.png': require('../static/img/food-2.png'),
'food-3.png': require('../static/img/food-3.png'),
}



export default class CarouselFoodHome extends Component {
constructor(props){
  super(props)
}


 render(){

return (
  <TouchableOpacity
            activeOpacity={1}
            style={styles.slideInnerContainer}
            key={this.props.keyval}
            >

              <View style={styles.imageContainer}>

                  <Image
                    source={ListImages[this.props.imagen]}
                    style={styles.image}
                  />

                </View>

          </TouchableOpacity>
  )
}




}
