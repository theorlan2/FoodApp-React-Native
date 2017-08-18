import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fffdfa',
  },
  contenedorDetalles:{
flex:1,
flexDirection:'row',
  },
  scrollCont:{
flex:1,
  },
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
  viewPager:{
    flex:1,
    height:20
  }
});
