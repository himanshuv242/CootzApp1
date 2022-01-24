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
                 Home
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
                name="emoji-events"
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
                name="trending-up"
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

export default App;

// to link icons
// npx react-native link react-native-vector-icons 