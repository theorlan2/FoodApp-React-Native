/**
 * FOOD APP React Native
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
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';

import  Header2  from '../componentes/Header2'
import  BtnLike  from '../componentes/BtnLike'
// Lista de Recetas
import { ArrayRecetas } from '../static/Recetas'

import  styles  from '../styles/index.styles'
import { ListIcons }  from '../static/Icons'

// Obtiene el Indice del Recipe Selecionado
import {IndexRecipe} from '../static/indiceRecipe'


const extractKey = ({id}) => id
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
//  this.renderItem=this.renderItem.bind(this)
}

// Obtiene la posicion del ViewPager y se la asigna al tab
onPageSelected = (e) => {
    this.setState({page: e.nativeEvent.position});
this.header.goTab(e.nativeEvent.position);
  };

// PagerView ir a esa pagina
go = (page) => {
     this.viewPager.setPage(page);
    this.setState({page});
 };


// Render de items del Flatlist Ingredientes
  renderItemIngredientes = ({item}) => {
    return (
      <TouchableOpacity style={styles.rowIngredients} key={item.id} >
        <View style={styles.contImageList} >
         <Image
           source={ListIcons[item.icon]} />
         </View>
  <View style={styles.contTextList} >
    <Text style={styles.ingTextList} >
        {item.nombre}
      </Text>
    </View>

      <View style={styles.contpesoTextList} >
     <Text style={styles.subTextList} >
         {item.peso}
       </Text>
     </View>
     </TouchableOpacity>
    )
  }

// Render de items del Flatlist Steps
  renderItemSteps = ({item}) => {
    return (
      <TouchableOpacity style={styles.row} key={item.id} >
 <View style={styles.contImageList} >
  <Image
    source={ListIcons[item.icon]} />
  </View>

  <View style={styles.contTextList} >
    <Text style={styles.TextList} >
        {item.nombre}
      </Text>

     <Text style={styles.subTextList} >
         {item.detalles}
       </Text>
      </View>
     </TouchableOpacity>
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar
            backgroundColor='#ffd073'
            barStyle="light-content"
          />
<Header2
  style={styles.Header2}
  ref={ (header) => {this.header = header }}
  navegacion={this.props.navigation}
  page={this.state.page}
  go={this.go}
   />


<View style={styles.contenedorDetalles}  >

   <ViewPagerAndroid
     style={styles.viewPager}
     initialPage={this.state.tabActiva}
     ref={viewPager => { this.viewPager = viewPager; }}
     onPageSelected={this.onPageSelected}
     >

   {/* Contenido Tab 1  */}
<View style={styles.DetallesTab1,[{position:'relative'}]} >
  <ScrollView style={styles.scrollCont} >
 <FlatList
   style={styles.ContList}
   data={ArrayRecetas[IndexRecipe.indice].ingredientes}
   renderItem={this.renderItemIngredientes}
   keyExtractor={extractKey}
 />

</ScrollView>
</View>
{/* Contenido Tab 2  */}
<View style={styles.DetallesTab2} >
  <ScrollView style={styles.scrollCont} >
  <FlatList
    style={styles.ContList}
    data={ArrayRecetas[IndexRecipe.indice].Steps}
    renderItem={this.renderItemSteps}
    keyExtractor={extractKey}
  />
</ScrollView>

</View>
{/* Contenido Tab 3  */}
<View style={styles.DetallesTab3} >
  <ScrollView style={styles.scrollCont} >
  <Text >{this.state.page}</Text>

</ScrollView>
</View>

</ViewPagerAndroid>

</View>
<BtnLike />
      </View>
    );
  }
}



///AppRegistry.registerComponent('FoodApp', () => FoodApp);
