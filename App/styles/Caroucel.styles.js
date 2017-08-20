import { StyleSheet,
  Dimensions,
   Platform } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const slideHeight = viewportHeight * 0.6;
const slideWidth = wp(80);
const itemHorizontalMargin = wp(2);
const backDescripWidth = wp(95);

function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
const PhotoWidth = itemWidth-40;
const entryBorderRadius = 8;



export default StyleSheet.create({
  slideInnerContainer: {
    flex:1,
       width: itemWidth,
       height: slideHeight,
       paddingHorizontal: itemHorizontalMargin,
       paddingBottom: 18 // needed for shadow
   },
   imageContainer: {
      flex:1,
      borderRadius: entryBorderRadius,
   },
   imageContainerEven: {
    },
   image: {
       ...StyleSheet.absoluteFillObject,
       width:itemWidth,
       height:slideHeight
   },
   // image's border radius is buggy on ios; let's hack it!
   radiusMaskEven: {
       backgroundColor: '#444'
   },
   textContainer: {
       justifyContent: 'center',
       paddingTop: 20 - entryBorderRadius,
       paddingBottom: 20,
       paddingHorizontal: 16,
       backgroundColor: 'white',
       borderBottomLeftRadius: entryBorderRadius,
       borderBottomRightRadius: entryBorderRadius
   },
   textContainerEven: {
       backgroundColor: '#444'
   },
   title: {
       color: '#444',
       fontSize: 13,
       fontWeight: 'bold',
       letterSpacing: 0.5
   },
   titleEven: {
       color: 'white'
   },
   subtitle: {
       marginTop: 6,
       color: '#eee',
       fontSize: 12,
       fontStyle: 'italic'
   },
   subtitleEven: {
       color: 'rgba(255, 255, 255, 0.7)'
   },
// Detalles Caroucel

  contDetallesCaroucel: {
  flex:1,
  },
  contTituloContDtC :{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  tituloContDtC:{
    color:'#ff8e00',
    fontSize:20
  },
  vistasContDtC:{
    color:'#ad9789',
    fontSize:16
  },
  btnVerRecipe:{
    flex:1,
    paddingHorizontal:50,
    paddingVertical:13,

  },
  btnVerRecipeGrd:{
    alignItems:'center',
    borderRadius:50,
    paddingHorizontal:50,
    paddingVertical:13,
    marginTop:20,
    elevation:3
    },
  btnVerRecipeText:{
      color:'#fff',
      fontSize:18

  }


})
