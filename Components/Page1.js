import React from 'react'
import { View, StyleSheet,Text, Button } from 'react-native'
import RadialGradient from 'react-native-radial-gradient'

const Page1 = () => {
  return (
    <View style={{ flex: 1 }}>
      
      <RadialGradient style={{ width: 400, height: 800, }}
        colors={['#4cd4ca','#0a2133']}
        center={[200,370]}
        radius={370} >
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:30, color:'#4cd4ca',fontWeight:'bold'}}>COOTZ</Text>
          </View>
          <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
            <Text  style={{fontSize:25,width:300, color:'white',textAlign:'center', fontWeight:'bold'}}>Practice Your Intellectual Skills With 100% Fun</Text>
          </View>
          <View style={{flex:0.5,alignItems:'center'}}>
            <Text onPress={()=>{alert("Skip Pressed")}} style={{fontSize:20,color:'white', fontWeight:'bold'}}>Skip</Text>
          </View>
    </RadialGradient>
    </View >
  )
}


export default Page1
