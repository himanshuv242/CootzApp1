import React from 'react'
import { View, Text, Image ,TouchableOpacity} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'


const Info = () => {
  return (
    <View style={{ backgroundColor: '#027d81', flex: 1, }}>
      <View style={{ marginTop: 20, marginLeft: 20, }}>
        <View  style={{ flexDirection: 'row', marginBottom:10}}>
          <View  style={{ flexDirection: 'row', }}>
            {/* User profile Picture */}
            <TouchableOpacity  onPress={()=>alert("hi")}>
            <Image source={require('../../assets/user.png')}
              style={{ height: 40, width: 40, borderRadius: 20 }} />
              </TouchableOpacity>

            <View style={{ marginLeft: 10, height: 40, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', width: 80 }}>
              {/* user wallet details */}
              <Text style={{ fontWeight: 'bold' }}>
                Icon Rs 5</Text>
            </View>
          </View>
          <View style={{ marginLeft: 120, flexDirection: 'row', }}>
            {/* Bell Icon */}
            <View style={{ marginRight: 10, height: 46, backgroundColor: 'white', borderRadius: 23, justifyContent: 'center', alignItems: 'center', width: 46 }}>
              <Text style={{ fontWeight: 'bold' }}>
                B</Text>
            </View>
            {/* Nav Icon */}
            <View style={{ marginRight: 10, height: 46, backgroundColor: 'white', borderRadius: 23, justifyContent: 'center', alignItems: 'center', width: 46 }}>
              <Text style={{ fontWeight: 'bold' }}>
                N</Text>
            </View>
          </View>
        </View>

        {/* Name and details of user */}
        <View >
          <Text style={{ color: 'white',fontWeight:'bold',fontSize:22 }}>Hello, Anirban</Text>
          <Text style={{ color: 'white',fontSize:15 }}>Start Playing Your Contest</Text>
        </View>
      </View>

    </View>
  )
}

export default Info
