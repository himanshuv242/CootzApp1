import React from 'react'
import { View, Image, ImageBackground, StyleSheet, Text } from 'react-native'

const SplashScreen = () => {
  return (
      <View style={styles.bgColor}>
        <View style={{ flex: 3, marginTop: 200 }}>
          <ImageBackground source={require('../Splash/MeshBg.png')}
            style={styles.bgImage}
            resizeMode='cover' >
            <ImageBackground source={require('../Splash/logo.png')}
              style={{ height: 50, width: 90 }}
              resizeMode='stretch' />
          </ImageBackground>
        </View>
        <View style={{ flex: 1, marginTop: 280 }}>
          <ImageBackground source={require('../Splash/Bootom_logo.png')}
            style={{ height: 30, width: 90 }}
            resizeMode='stretch' />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  bgColor: {
    flex: 1,
    backgroundColor: "#0A2133",
    alignItems: 'center',
    justifyContent: 'center'
  },

  bgImage: {
    height: 420,
    width: 420,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SplashScreen
