import { StyleSheet } from 'react-native';

export default StyleSheet.create({

contenedor:{
  flexDirection:'row'
},
  contenedorH: {
  flex:1
  },
contenedorHTop:{
flexDirection:'row'
},
  vContenedor: {
    flex:1,
    flexDirection:'row',
    margin: 10,
  },
  tituloCont: {
    flex:1,
    alignItems:'center'
  },
  iconMenu: {
    flex:1,
    alignItems:'center',
    marginTop:10
  },
tituloText:{
 fontSize:20,
 marginTop:10,
  color: '#fff',
  textAlign:'center'
},
tabsCont:{
flexDirection:'row',
paddingVertical:15
},
svgCont:{
justifyContent:'center',
alignItems:'center',
opacity:0.3
},
svgTabs:{
  width:40,
  height:40,
  alignSelf:'center'
},
nomTab:{
  fontSize:16,
  color:'#fff'
},
// Corte en el Tab Activa
contImitTabAct:{
  flex:1,
  maxWidth:'33.3%',
  alignSelf:'center'
},
contComit:{
  flex:1,
  flexDirection:'row',
  justifyContent:'flex-start'
},
svgComit:{
  top:-3.61,
  alignSelf:'center'
}
// <------
})
