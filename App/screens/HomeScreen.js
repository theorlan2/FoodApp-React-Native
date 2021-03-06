/**
 * FOOD APP React Native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

// Estilos
import  styles  from '../styles/index.styles'
import  CarouselStyles  from '../styles/Caroucel.styles'
import { sliderWidth,itemWidth } from '../styles/Caroucel.styles'

// Lista de Recetas
import { ArrayRecetas } from '../config/Recetas'

// Componentes
import  Header  from '../componentes/HeaderHome/Header'
import CarouselFoodHome from '../componentes/CaroucelHome/CaroucelFoodHome';

// Indice de la Receta actual
import {IndexRecipe} from '../config/indiceRecipe'

export default class HomeScreen extends Component {

constructor(props){
  super(props)
this.state = {
  index:0
 }

this.CurrentItem = this.CurrentItem.bind(this);

 this.cell = ArrayRecetas.map((val,key)=>{
 return  <CarouselFoodHome key={key} keyval={key} imagen={val.imagen}  />
  })

 }

// Obtiene el Incice actual del caroucel
CurrentItem(){
 this.setState({
 index:this.carouc.currentIndex
 })
IndexRecipe.indice = this.carouc.currentIndex
}

  render() {
    return (
      <View style={styles.container}>
    <StatusBar
      backgroundColor='#fffdfa'
      barStyle="dark-content"
      />

  <Header />
  <ScrollView style={styles.scrollCont} >
<View style={styles.contenedorDetalles} >

     <Carousel
             sliderWidth={sliderWidth}
             itemWidth={itemWidth}
             firstItem={this.state.index}
             inactiveSlideScale={0.94}
             inactiveSlideOpacity={1}
             enableMomentum={false}
             containerCustomStyle={styles.slider}
             contentContainerCustomStyle={styles.sliderContainer}
             showsHorizontalScrollIndicator={false}
             snapOnAndroid={true}
             ref={ car => { this.carouc = car} }
             onScroll={()=>this.CurrentItem()}
             onLayout={()=>this.CurrentItem()}
             removeClippedSubviews={false}
           >

          {this.cell}

           </Carousel>

  </View>
<View style={CarouselStyles.contDetallesCaroucel} >
 <View style={CarouselStyles.contTituloContDtC} >
   <Text style={[CarouselStyles.tituloContDtC,{color:ArrayRecetas[IndexRecipe.indice].color}]} >{ArrayRecetas[this.state.index].nombre}</Text>
   <Text style={CarouselStyles.vistasContDtC} >{ArrayRecetas[this.state.index].views+' Views / '+ArrayRecetas[this.state.index].likes+' Likes'}</Text>
    <View style={CarouselStyles.contStarts} >
{/*  Ejemplo de Starts */}
      <Image
        source={require('../static/img/starts.png')}
 />
  </View>
    <TouchableOpacity
      onPress={()=>this.props.navigation.navigate('Detalles')}
      style={CarouselStyles.btnVerRecipe} >
      {/* Se obtienen los colores del objeto ArrayRecetas y se aplican al cambio de indice */}
      <LinearGradient colors={[ArrayRecetas[this.state.index].gradients[0], ArrayRecetas[this.state.index].gradients[1]]} style={CarouselStyles.btnVerRecipeGrd}  >
      <Text style={CarouselStyles.btnVerRecipeText} >View Recipe</Text>
      </LinearGradient>
    </TouchableOpacity>

         </View>
        </View>
       </ScrollView>
      </View>
    );
  }
}
