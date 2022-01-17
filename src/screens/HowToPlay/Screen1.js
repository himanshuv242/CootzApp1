import React from 'react';
import {
  ImageBackground,
  Text,
  useColorScheme,
  ScrollView,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const Screen1 = (props) => {
  return (
    // <ScrollView>
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1.3, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: 5 }}>Join a contest</Text>
        <Text style={{ fontSize: 13, color: 'white', textAlign: 'center', width: 300 }}>Join any contest by tapping on any of </Text>
        <Text style={{ fontSize: 13, color: 'white', textAlign: 'center', width: 335 }}> the contest  cards displayed on the home screen</Text>
      </View>
      <View style={{ flex: 4,marginLeft:-25,marginTop:-30 }}>
        <ImageBackground source={require('../../assets/HowtoplayImg/Howtoplay1.png')}
          style={{ height: 600, width: 520 }}
          resizeMode='stretch' />
      </View>
      <View style={{ flex: 1, }}>
        <Text style={{ fontSize: 100, color: 'white', textAlign: 'center' }}>.</Text>
      </View>
      <View style={{ flex: 0.5, }}>
        <Text onPress={()=>props.navigation.navigate('Screen2')} style={{ fontSize: 20, color: 'black', textAlign: 'center' }}>Next</Text>
      </View>
    </View>
    // </ScrollView>
  )
}

export default Screen1
