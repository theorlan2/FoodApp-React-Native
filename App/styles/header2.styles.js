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
tabsList:{
flex:1,
justifyContent:'center',
alignItems:'center',
opacity:0.7
},
tabsListActive:{
flex:1,
justifyContent:'center',
alignItems:'center'
},

svgTabs:{
  width:40,
  height:40
},
nomTab:{
  fontSize:16,
  color:'#fff'
},
contImitTabAct:{
  flex:1,
  maxWidth:'33.3%',
  alignSelf:'center'
},
contComit:{
  flex:1,
  flexDirection:'row',
  justifyContent:'center'
},
svgComit:{
  top:-3.5,
  alignSelf:'center'
}

})
