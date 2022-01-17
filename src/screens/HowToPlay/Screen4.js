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
        <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', fontWeight: 'bold', marginBottom: 5 }}>Withdraw The Money</Text>
        <Text style={{ fontSize: 13, color: 'white', textAlign: 'center', width: 300 }}>Withdraw the money you won to the wallet </Text>
        <Text style={{ fontSize: 13, color: 'white', textAlign: 'center', width: 335 }}>and transfer it to your bank account.</Text>
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
