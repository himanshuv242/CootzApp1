import React, { useEffect } from 'react';
import {
 
  View,
} from 'react-native';
import 'react-native-gesture-handler'
import IndexScreen from './src/screens/HowToPlay/IndexScreen';





const App = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <IndexScreen />






      {/* <Drawer /> */}
      {/* <NavigationContainer>
      <LinearGradient
        colors={['#0A2133', '#4cd4ca']} style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
        <Stack.Navigator initialRouteName='Screen1'>
          <Stack.Screen name='Screen1' component={Screen1} />
          <Stack.Screen name='Screen2' component={Screen2} />
        </Stack.Navigator> */}

      {/* <Screen1 /> */}
      {/* <Button title='Go to How to Play Screens' onPress={()=>{props.navigator.navigate}} /> */}
      {/* <Screen2 /> */}
      {/* <Screen3 /> */}
      {/* <Screen4 /> */}
      {/* <SplashScreen /> */}
      {/* <Page1 /> */}
      {/* </LinearGradient> */}
      {/* <Screen5 /> */}
      {/* <RegisterPage/> */}
        
     {/* <WinningScreen /> */}
       

    </View>
  )

};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#0A2133'
//   },
//   textSign: {

//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   button: {
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   signIn: {
//     width: '100%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   colors: {
//     // width: '100%',
//     // height: 50,
//     width: 500,

//   },
//   bottom: {
//     MarginTop: 700,
//     marginLeft: 400,
//   },
//   diagonalLine: {
//     marginLeft: -30,
//     position: 'absolute',
//     transform: [{ rotate: '25deg' }],
//     top: 300,
//     width: 450,
//     height: 40,
//     backgroundColor: '#4cd4ca'
//   },
//   diagonalLine2: {
//     marginLeft: -25,
//     position: 'absolute',
//     transform: [{ rotate: '-25deg' }],
//     top: 300,
//     width: 450,
//     height: 40,
//     backgroundColor: '#4cd4ca'
//   }

// });

export default App;

// hello himanshu