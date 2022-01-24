import React from 'react'
import { View, Text,Image } from 'react-native'
import Info from './Info';
import Trending from './Trending';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Trivia from './Trivia';
import Exams from './Exams';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Info />
      </View>
      
      <View style={{ flex: 4 }}>

        <Tab.Navigator screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            color: '#ffffff',
            fontFamily: 'Poppins-Medium',
            fontWeight: '800',
          },
          tabBarStyle: { backgroundColor: '#027d81', },
          tabBarItemStyle: { height: 30,},
          tabBarIndicatorStyle: { backgroundColor: '#000000', },
        }}
        
          >
          <Tab.Screen name="Trending" component={Trending}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginLeft:-35,marginTop:2}}>
                  <Image 
                  source={require('../../assets/HomeScreen/Trending.png')}
                  resizeMode='cover'
                  style={{width:25,height:25,marginRight:5}} />
                  <Text style={{color:'white',fontWeight:'bold'}}>Trending</Text>
                </View>
              )
            }}
          />
          <Tab.Screen name="Trivia" component={Trivia} 
           options={{
            tabBarIcon: ({ focused }) => (
              <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginLeft:-35,marginTop:2}}>
                <Image 
                source={require('../../assets/HomeScreen/TRIVIA.png')}
                resizeMode='cover'
                style={{width:25,height:25,marginRight:5}} />
                <Text style={{color:'white',fontWeight:'bold'}}>Trivia</Text>
              </View>
            )
          }}/>
          <Tab.Screen name="Exams" component={Exams} 
           options={{
            tabBarIcon: ({ focused }) => (
              <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',marginLeft:-35,marginTop:2}}>
                <Image 
                source={require('../../assets/HomeScreen/EXAMS.png')}
                resizeMode='cover'
                style={{width:25,height:25,marginRight:5}} />
                <Text style={{color:'white',fontWeight:'bold'}}>Exams</Text>
              </View>
            )
          }}/>
        </Tab.Navigator>

      </View>

    </View>
  )
}

export default Home
