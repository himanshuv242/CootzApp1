import React from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

// import { TouchableOpacity } from 'react-native-gesture-handler'


const Info = () => {


  return (
    // <SafeAreaView>
    <View style={{ backgroundColor: '#027d81', flex: 1, }}>

      <View style={{ marginTop: 10, marginLeft: 20, }}>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View style={{ flexDirection: 'row', }}>
            {/* User profile Picture */}
            <TouchableOpacity onPress={() => alert("hi")}>
              <Image source={require('../../assets/user.png')}
                style={{ height: 40, width: 40, borderRadius: 20 }} />
            </TouchableOpacity>

            {/* user wallet details */}
            <TouchableOpacity>
              <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: 10, height: 40, backgroundColor: 'white', borderRadius: 20, alignItems: 'center', width: 80 }}>
                <Icon name="wallet" size={25} color="black" />
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 5, color: 'black' }}>
                  ₹ {5}
                </Text>

              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 120, flexDirection: 'row', }}>
            {/* Bell Icon */}
            <TouchableOpacity>
              <View style={{ marginRight: 10, height: 46, backgroundColor: 'white', borderRadius: 23, justifyContent: 'center', alignItems: 'center', width: 46 }}>
                <Text style={{ fontWeight: 'bold' }}>
                  <Icon3 style={{ alignSelf: 'center' }} name='bell' size={17} color="black"/>
                </Text>
              </View>
            </TouchableOpacity>

            {/* Notification Icon */}
            <TouchableOpacity>
            <View style={{ marginRight: 10, height: 46, backgroundColor: 'white', borderRadius: 23, justifyContent: 'center', alignItems: 'center', width: 46 }}>
              <Text style={{ fontWeight: 'bold' }}>
              <Icon2 style={ { alignSelf: 'center' } } name='menu' size={ 17 } color="black" />
                </Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Name and details of user */}
        <View >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>Hello , Anirban</Text>
          <Text style={{ color: 'white', fontSize: 15 }}>Start Playing Your Contest</Text>
        </View>
      </View>

    </View >
    // </SafeAreaView>
  )
}

export default Info
