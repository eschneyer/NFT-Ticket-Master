import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './home';
import PassInfo from './passInfo';

const screens = {
  Home : {
    screen : Home,
    navigationOptions : {
      title : "NFT Wallet Home",
      headerStyle: {backgroundColor : "#221C5C", height: 115},
      headerTintColor: '#fff',
    }
  },
  PassInfo : {
    screen : PassInfo,
    navigationOptions : {
      title : "Pass Information",
      headerStyle: {backgroundColor : "#221C5C",height: 115},
      headerTintColor: '#fff',
    }
  },
  
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);
