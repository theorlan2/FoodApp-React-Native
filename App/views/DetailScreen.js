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
  ViewPagerAndroid,
  View
} from 'react-native';

import  Header2  from '../componentes/Header2'
import  BtnLike  from '../componentes/BtnLike'



import  styles  from '../styles/index.styles'

export default class DetailScreen extends Component {
constructor(props){
  super(props)
  this.state = {
    tabActiva:0,
    page:0,
    animationsAreEnabled:true
  }

  this.viewPager1 =  this.viewPager;
  this.go=this.go.bind(this)
}


go = (page) => {
    if (this.state.animationsAreEnabled) {
      this.viewPager.setPage(page);
    } else {
      this.viewPager.setPageWithoutAnimation(page);
    }

    this.setState({page});
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            backgroundColor='#ffd073'
            barStyle="dark-content"
          />
<Header2 navegacion={this.props.navigation} page={this.state.page} go={this.go} />
<ScrollView style={styles.scrollCont} >

<View
style={styles.contenedorDetalles}
   >
     <ViewPagerAndroid
       style={styles.viewPager}
       initialPage={this.state.tabActiva}
       ref={viewPager => { this.viewPager = viewPager; }}
       >
<View style={styles.DetallesTab1} >
  <Text >{this.state.tabActiva}</Text>
</View>
<View style={styles.DetallesTab2} >
  <Text >2</Text>

</View>
<View style={styles.DetallesTab3} >
  <Text >3</Text>

</View>

</ViewPagerAndroid>

</View>
</ScrollView>
<BtnLike />
      </View>
    );
  }
}



///AppRegistry.registerComponent('FoodApp', () => FoodApp);
