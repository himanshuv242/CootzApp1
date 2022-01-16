import React, { useEffect } from 'react';
import {
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Screen1 from './Components/HowToPlay/Screen1';
import Screen2 from './Components/HowToPlay/Screen2';
import Screen3 from './Components/HowToPlay/Screen3';
import Screen4 from './Components/HowToPlay/Screen4';
import Screen5 from './Components/HowToPlay/Screen5';
import Page1 from './Components/Page1';
import RegisterPage from './Components/RegisterPage';
import SplashScreen from './Components/SplashScreen';
import WinningScreen from './Components/WinningScreen';




const App = () => {

  return (
    <View style={{ flex: 1 }}>
      {/* <Drawer /> */}
      {/* <LinearGradient
        colors={['#0A2133', '#4cd4ca']} style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}> */}

      {/* <Screen1 /> */}
      {/* <Screen2 /> */}
      {/* <Screen3 /> */}
      {/* <Screen4 /> */}
      {/* <SplashScreen /> */}
      {/* <Page1 /> */}
      {/* </LinearGradient> */}
      {/* <Screen5 /> */}
      {/* <RegisterPage/> */}
        
     <WinningScreen />
       

    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A2133'
  },
  textSign: {

    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  colors: {
    // width: '100%',
    // height: 50,
    width: 500,

  },
  bottom: {
    MarginTop: 700,
    marginLeft: 400,
  },
  diagonalLine: {
    marginLeft: -30,
    position: 'absolute',
    transform: [{ rotate: '25deg' }],
    top: 300,
    width: 450,
    height: 40,
    backgroundColor: '#4cd4ca'
  },
  diagonalLine2: {
    marginLeft: -25,
    position: 'absolute',
    transform: [{ rotate: '-25deg' }],
    top: 300,
    width: 450,
    height: 40,
    backgroundColor: '#4cd4ca'
  }

});

export default App;
