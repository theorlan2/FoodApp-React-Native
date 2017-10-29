// @flow

import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'

import Svg,{  Path } from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

export default class BtnLike extends Component {

constructor(props){
  super(props)
}

render() {
  return (
   <LinearGradient
      colors={[this.props.colorsGradients[0], this.props.colorsGradients[1]]}
      style={styles.contenedorBtn}
        >
<TouchableOpacity >

<Svg xmlns="http://www.w3.org/2000/svg" style={styles.btnSvg}  viewBox="0 0 176.104 176.104">
<Path
  d="M150.383 18.3c-7.13-3.927-15.308-6.186-24.033-6.186-15.394 0-29.18 7.015-38.283 18.015-9.146-11-22.92-18.016-38.334-18.016-8.704 0-16.867 2.26-24.013 6.187C10.388 26.793 0 43.118 0 61.88c0 5.37.874 10.522 2.457 15.34 8.537 38.375 85.61 86.772 85.61 86.772s77.022-48.396 85.57-86.77c1.584-4.82 2.467-9.978 2.467-15.342 0-18.754-10.388-35.074-25.72-43.577z"
  fill="#fff3d9"
/>
</Svg>
</TouchableOpacity>
</LinearGradient>

   )// fin Return
 } // Fin Render
}
