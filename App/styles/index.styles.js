import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fffdfa',
  },
  slider:{
    marginTop:20
  },
  contenedorDetalles:{
flex:1,
  },
  Header2:{
flex:1
  },
  scrollCont:{
flex:1,
  },
  viewPager:{
    flex:1,
    paddingVertical:20
  },
DetallesTab1:{
  flex:1,
  position:'relative'
},

// Btn  Like
contenedorBtn:{
  position:'absolute',
  bottom:16,
  right:16,
  width:52,
  height:52,
  borderRadius:50,
  elevation:8,
  zIndex:20,
  marginBottom:10,
},
btnSvg:{
  width:28,
  height:28,
  marginTop:14,
  margin:12
},

// FlatList Estilos
ContList:{
flex:1,
},
row:{
  flex:1,
  flexDirection:'row',
  paddingTop:20,
  paddingBottom:20
},
rowIngredients:{
  flex:1,
  flexDirection:'row',
  paddingTop:20,
  paddingBottom:20,
 marginLeft:20
},
contImageList:{
  flex:1,
  marginLeft:10
},
contTextList:{
  flex:4,
},
TextList:{
  color:'#444',
  fontSize:16
},
ingTextList:{
  color:'#444',
  fontSize:16,
  marginTop:10
},
contpesoTextList: {
  flex:1,
  marginTop:12
},
subTextList:{
  color:'#999',
  fontSize:14
}



});
