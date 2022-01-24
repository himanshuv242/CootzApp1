import React, {useState,  useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Easing,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Entypo from 'react-native-vector-icons/Entypo';

const Otp = () => {
  const number = '99******73';
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-27deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration:1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });
  
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        colors={['#194954', '#000000']}>
        <View style={{flex: 1}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Animated.Image
              source={require('../assets/OTP/OTP.png')}
              style={{height: 90, width: 90, transform: [{rotate:spin}]}}
            />
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                width: 400,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Enter the code sent to your
            </Text>
            <Text
              style={{
                fontSize: 25,
                color: 'white',
                width: 300,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              mobile number
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                width: 300,
                textAlign: 'center',
              }}>
              {number}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <OTPInputView
              style={{width: '60%', height: 50}}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad={false}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
          </View>

          <View
            style={{
              flex: 0.3,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Entypo
              name="back-in-time"
              style={{
                color: 'white',
                fontSize: 20,

                fontWeight: 'bold',
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                width: 120,
                textAlign: 'center',
              }}>
              Resend <Text style={{color: 'yellow'}}>OTP</Text>
            </Text>
          </View>
          <View style={{flex: 3}}></View>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 50,

    borderWidth: 0,
    borderBottomWidth: 3,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});

export default Otp;
