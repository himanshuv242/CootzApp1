import React from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import RadialGradient from 'react-native-radial-gradient'

const RegisterPage = () => {
  return (
    <View >

      <RadialGradient style={{ width: 400, height: 800, }}
        colors={['#4cd4ca', '#0a2133']}
        // stops={[0.1, 0.4, 0.3, 0.75]}
        center={[200, 370]}
        radius={370} >
        <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ fontSize: 30, color: '#4cd4ca', fontWeight: 'bold' }}>COOTZ ICON</Text>
        </View>
        <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ fontSize: 30, color: '#4cd4ca', fontWeight: 'bold' }}>COOTZ</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
          <Text style={{ fontSize: 30, width: 300, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Let's Get Started</Text>
          <Text style={{ fontSize: 15, width: 200, color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Create An Account To Get Your Access</Text>
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <View style={styles.icon}>
            <TextInput style={styles.input} placeholder='Full name' />
          </View>
          <View style={styles.icon}>
            <TextInput style={styles.input} placeholder='Phone Number' />
          </View>
          <View style={styles.icon}>
            <TextInput style={styles.input} placeholder='Gender' />
          </View>
          <View style={styles.icon2}>
            <TextInput style={styles.input} placeholder='Have A Referal Code' />
            <View style={{ marginLeft: 25, borderBottomColor: 'black', borderBottomWidth: 1, width: 300 }} />
          </View>
          <View style={{ flex: 1 }}>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center', }}>
          <CheckBox disabled={false}  />
          <Text style={styles.button}>REGISTER</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center', }}>

        </View>

      </RadialGradient>
    </View >
  )
}

const styles = StyleSheet.create({
  input: {
    fontWeight: 'bold',
    height: 40,
    padding: 10,
    paddingLeft: 25,
    color: 'black',
    backgroundColor: "white",
    borderRadius: 7,
    fontSize: 15,
  },
  icon: {
    textAlignVertical: 'center',
    marginBottom: 10,
    height: 10,
    flex: 1,
    width: 340,
    backgroundColor: 'white',
    borderRadius: 7,
  },
  icon2: {
    flex: 1,
    width: 340,
    backgroundColor: 'white',
    borderRadius: 7,

  },
  button: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'darkblue',
    width: 340,
    textAlign: 'center',
    borderRadius: 7,
    height: 40,

  }
})

export default RegisterPage;
