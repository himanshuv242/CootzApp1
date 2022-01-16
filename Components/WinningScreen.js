import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

const WinningScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#4cd4ca', }}>

      <ImageBackground source={require('./WinningImg/Confetti.png')}
        style={styles.bgImage}
        resizeMode='stretch' >
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{  color: 'white', fontSize: 35, textAlign: 'center', fontWeight: 'bold',}}>CONGRATS</Text>
        </View>
        <ImageBackground source={require('./WinningImg/WinningBox.png')}
          style={{ height: 300, width: 500,flex:2.5,}}
          resizeMode='stretch' >
          <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', fontWeight: 'bold',marginTop:100 ,width:100,marginLeft:120}}>You Won</Text>

          {/* Money Won */}
          <Text style={{ color: '#4cd4ca', fontSize: 35, textAlign: 'center', fontWeight: 'bold', width:100,marginLeft:120}}>Rs 60</Text>

          <Text style={{ color: 'white', fontSize: 15, textAlign: 'center',fontWeight: 'bold',backgroundColor:'black',borderRadius:4,width:100,marginLeft:120 }} onPress={()=>{alert("Withdraw Money")}}>Withdraw</Text>
        </ImageBackground>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    height: 800,
    width: 400,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default WinningScreen;
