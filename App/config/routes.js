//@flow
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'

export default FoodApp = StackNavigator({
  Home:{
    screen:HomeScreen,
  },
  Detalles:{
    screen:DetailScreen,
  },
},
  {  headerMode: 'none' }
);
