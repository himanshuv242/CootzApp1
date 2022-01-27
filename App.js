import React, { useEffect } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import 'react-native-gesture-handler'

import WinningScreen from './src/screens/WinningScreen';
import Home from './src/screens/Home/Home';
import Funds from './src/screens/Funds/Funds';
import ChooseUpiFlatList from './src/screens/Funds/ChooseUpiFlatlist';
import AddNewUPI  from './src/screens/Funds/AddNewUPI';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UpiScreen from './src/screens/Funds/UpiScreen';


const dimension = Dimensions.get('screen');
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    
       <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 14,
            color: '#fff',
            fontFamily: 'Poppins-Medium',
            fontWeight: '800',
          },
          tabBarStyle: { backgroundColor: '#082032', },
          tabBarItemStyle: { height: 40 },
        }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => {
              return {
                tabBarStyle: {
                  height: dimension.height * 0.07,
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#082032',
                },
                headerShown: false,
                tabBarLabel: ({ focused }) => (
                  <Text
                    style={{
                      color: focused ? '#4cd4ca' : 'white',
                      fontSize: RFValue(10),
                    }}>
                    Home
                  </Text>
                ),
                tabBarIcon: ({ focused }) => (
                  <Icon
                    name="home-filled"
                    size={focused ? 27 : 24}
                    style={{ color: focused ? '#4cd4ca' : 'white' }}
                  />
                ),
              };
            }}
          />
          <Tab.Screen
            name="Winners"
            component={WinningScreen}
            options={({ navigation }) => {
              return {
                tabBarStyle: {
                  height: dimension.height * 0.07,
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#082032',
                },

                headerShown: false,
                tabBarLabel: ({ focused }) => (
                  <Text
                    style={{
                      color: focused ? '#4cd4ca' : 'white',
                      fontSize: RFValue(10),
                    }}>
                    Winners
                  </Text>
                ),
                tabBarIcon: ({ focused }) => (
                  <Icon
                    name="emoji-events"
                    size={focused ? 27 : 24}
                    style={{ color: focused ? '#4cd4ca' : 'white' }}
                  />
                ),
              };
            }}
          />

          <Tab.Screen
            name="Funds"
            component={UpiScreen}
            options={({ navigation }) => {
              return {
                tabBarStyle: {
                  height: dimension.height * 0.07,
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#082032',
                },

                headerShown: false,
                tabBarLabel: ({ focused }) => (
                  <Text
                    style={{
                      color: focused ? '#4cd4ca' : 'white',
                      fontSize: RFValue(10),
                    }}>
                    Funds
                  </Text>
                ),
                tabBarIcon: ({ focused }) => (
                  <Icon
                    name="trending-up"
                    size={focused ? 27 : 24}
                    style={{ color: focused ? '#4cd4ca' : 'white' }}
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
