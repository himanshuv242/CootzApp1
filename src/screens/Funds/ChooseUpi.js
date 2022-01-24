import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChooseUpi = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#247174'}}>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
          Choose UPI ID
        </Text>
      </View>
      {/* First UPI button */}
      <View
        style={{
          flex: 0.16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LinearGradient
          start={{x: 0.0, y: 0}}
          end={{x: 0.9, y: 0}}
          colors={['#4CD3C9', '#009C91']}
          style={{borderRadius: 10}}>
          <View
            style={{
              height: 100,
              width: 350,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{flex: 4.5, flexDirection: 'row'}}
              onPress={() => alert('UPI ID selected.')}>
              <View
                style={{
                  flex: 1.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 90,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    backgroundColor: '#70d8d4',
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  {/* <Image style={{width:}} source={require('../assets/ChooseUPI/Paytm.png')} /> */}
                  Paytm
                </Text>
              </View>

              <Text
                style={{
                  flex: 3,
                  fontSize: 15,
                  textAlignVertical: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                rahul.paytm@okaxis
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              onPress={() => alert('Want to remove this UPI?')}>
              <MaterialCommunityIcons
                name="delete"
                style={{
                  color: '#009C91',
                  fontSize: 25,
                  backgroundColor: 'white',
                  padding: 9,
                  borderRadius: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      {/* Second UPI Button starts*/}
      <View
        style={{
          flex: 0.16,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <LinearGradient
          start={{x: 0.0, y: 0}}
          end={{x: 0.9, y: 0}}
          colors={['#4CD3C9', '#009C91']}
          style={{borderRadius: 10}}>
          <View
            style={{
              height: 100,
              width: 350,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{flex: 4.5, flexDirection: 'row'}}
              onPress={() => alert('UPI ID selected')}>
              <View
                style={{
                  flex: 1.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 90,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    backgroundColor: '#70d8d4',
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
                  {/* <Image style={{width:}} source={require('../assets/ChooseUPI/Paytm.png')} /> */}
                  Paytm
                </Text>
              </View>

              <Text
                style={{
                  flex: 3,
                  fontSize: 15,
                  textAlignVertical: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                rahul.paytm@okaxis
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              onPress={() => alert('Want to remove this UPI?')}>
              <MaterialCommunityIcons
                name="delete"
                style={{
                  color: '#009C91',
                  fontSize: 25,
                  backgroundColor: 'white',
                  padding: 9,
                  borderRadius: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

      {/* Add new UPI Button */}

      <View
        style={{
          flex: 0.2,
          
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 60,
            width: 350,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderStyle: 'dashed',
              borderWidth: 2,
              width:350,
              borderRadius:13,
              height:60,
              borderColor:'white',
            }}
            onPress={() =>alert('Want to add new UPI?')}>
            <Text style={{fontSize: 15,color: 'white',fontWeight: 'bold'}}>Add new UPI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChooseUpi;
// Later on in your styles..
