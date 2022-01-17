import React from 'react';
import {
  ImageBackground,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const Screen1 = () => {
  return (
    <View style={{ flex: 1 }}>

      <View style={{ flex: 1.3, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: 5 }}>Select The Right Answers</Text>
        <Text style={{ fontSize: 13, color: 'white', textAlign: 'center', width: 300 }}>Give Answers of the questions and tap on </Text>
        <Text style={{ fontSize: 13, color: 'white', textAlign: 'center', width: 335 }}>the answers for next question.</Text>
      </View>
      <View style={{ flex: 4,marginLeft:-25,marginTop:-30 }}>
        <ImageBackground source={require('../../assets/HowtoplayImg/Howtoplay1.png')}
          style={{ height: 600, width: 520 }}
          resizeMode='stretch' />
      </View>
      <View style={{ flex: 1, }}>
        <Text style={{ fontSize: 100, color: 'white', textAlign: 'center' }}>.</Text>
      </View>
    </View>
  )
}

export default Screen1
