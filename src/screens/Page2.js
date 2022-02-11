import React from 'react'
import { View, StyleSheet,Text } from 'react-native'
import RadialGradient from 'react-native-radial-gradient'

const Page2 = () => {
  return (
    <View style={{ flex: 1 }}>
      
      <RadialGradient style={{ width: 400, height: 800, }}
        colors={['#4cd4ca','#0a2133']}
        // stops={[0.1, 0.4, 0.3, 0.75]}
        center={[200,370]}
        radius={370} >
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:27, color:'#4cd4ca',fontWeight:'bold'}}>COOTZ</Text>
          </View>
          <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
            <Text  style={{fontSize:25,width:300, color:'white',textAlign:'center', fontWeight:'bold'}}>Give Your Exams Full Engagement</Text>
          </View>
    </RadialGradient>
    </View >
  )
}


export default Page2
