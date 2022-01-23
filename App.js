import React, { useEffect } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import 'react-native-gesture-handler'
import IndexScreen from './src/screens/HowToPlay/IndexScreen';
import WinningScreen from './src/screens/WinningScreen';
import Winners from './src/screens/Winners';
import Info from './src/screens/Home/Info';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home/Home';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon4 from 'react-native-vector-icons/FontAwesome5';

// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();
import { Dimensions, PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const dimension = Dimensions.get('screen');
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={ {
        headerShown:false,
        tabBarLabelStyle: {
          fontSize: 14,
          color: '#fff',
          fontFamily: 'Poppins-Medium',
          fontWeight: '800',
        },
        tabBarStyle: { backgroundColor: '#082032' ,},
        tabBarItemStyle: { height: 40 },
      } }
       >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon4
            name="home"
            size={focused ? 27 : 24}
            style={{color: focused ? '#4cd4ca' : 'white'}}></Icon4>
           
          )
        }}
            
      />
      <Tab.Screen
        name="Winners"
        component={WinningScreen}
        options={({navigation}) => {
          return {
            tabBarStyle: {
              height: dimension.height * 0.07,
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              backgroundColor: '#082032',
            },

            headerShown: false,
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? '#4cd4ca' : 'white',
                  fontSize: RFValue(10),
                }}>
                Winners
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Icon
                name="home-filled"
                size={focused ? 27 : 24}
                style={{color: focused ? '#4cd4ca' : 'white'}}
              />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Funds"
        component={WinningScreen}
        options={({navigation}) => {
          return {
            tabBarStyle: {
              height: dimension.height * 0.07,
              alignItems: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              backgroundColor: '#082032',
            },

            headerShown: false,
            tabBarLabel: ({focused}) => (
              <Text
                style={{
                  color: focused ? '#4cd4ca' : 'white',
                  fontSize: RFValue(10),
                }}>
                Funds
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <Icon
                name="home-filled"
                size={focused ? 27 : 24}
                style={{color: focused ? '#4cd4ca' : 'white'}}
              />
            ),
          };
        }}
      />

      
      </Tab.Navigator>
    </NavigationContainer>
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
