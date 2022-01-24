import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, FlatList} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const ChooseUpiFlatList = ({navigation}) => {

    const upi= [
        {company:'Paytm',id:'rahul.paytm@okaxis',key:'1'},
        {company:'G-Pay',id:'himanshuv242@okaxis',key:'2'},
       
    ]

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#247174'}}>
        {/* MODAL CODE STARTS */}
      <Modal visible={modalOpen} animationType="fade" transparent={true}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#000000aa',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          activeOpacity={1}
          onPress={() =>setModalOpen(false)}>
          <TouchableWithoutFeedback
            style={{
              backgroundColor: 'white',
              height: 150,
              width: 355,
              borderRadius: 10,
            }}>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  marginRight: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    fontSize: 11,
                    backgroundColor: 'black',
                    width: 45,
                    height: 45,
                    borderRadius: 45,
                    textAlignVertical: 'center',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  {/* <Image style={{width:}} source={require('../assets/ChooseUPI/Paytm.png')} /> */}
                  Paytm
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 16,
                  textAlignVertical: 'center',
                  fontWeight: 'bold',
                  color: 'black',
                  marginTop: 15,
                }}>
                rahul.paytm@okaxis
              </Text>
            </View>
            <View
              style={{
                flex: 0.5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#4CD4CA',
                  width: 150,
                  height: 35,
                  borderRadius: 5,
                  flexDirection: 'row',
                }}
                onPress={() => setModalOpen(false)}>
                <MaterialCommunityIcons
                  name="delete"
                  style={{
                    color: '#009C91',
                    fontSize: 15,
                    backgroundColor: 'white',
                    padding: 5,
                    borderRadius: 25,
                  }}
                />
                <Text style={{fontSize: 16, color: 'white', marginLeft: 10}}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
      {/* MODAL CODE ENDS */}

      
        <View
          style={{
            marginVertical:10,
            justifyContent: 'center',
            alignItems: 'center',
            
          }}>
          <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
            Choose UPI ID
          </Text>
        </View>
        <View
                style={{flex:4,}}
                > 
        <FlatList data={upi} 
        renderItem={({item})=>{
            return(
                
                <View
          style={{
            marginVertical:5,
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
                    {item.company}
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
                  {item.id}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setModalOpen(true)}>
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
            )
        }}
        />
         <View
          style={{
              marginTop:20,
            alignItems: 'center',
            justifyContent: 'center',
           
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderStyle: 'dashed',
              borderWidth: 2,
              width: 350,
              borderRadius: 13,
              height: 60,
              borderColor: 'white',
            }}
            animationType={'slide'}
            onPress={() => navigation.navigate('AddUPI')}>
            <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
              Add new UPI
            </Text>
          </TouchableOpacity>
        </View>
       
        </View>
        {/* Add new UPI Button */}

        {/* <View
          style={{
              flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: ''
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderStyle: 'dashed',
              borderWidth: 2,
              width: 350,
              borderRadius: 13,
              height: 60,
              borderColor: 'white',
            }}
            animationType={'slide'}
            onPress={() => navigation.navigate('AddUPI')}>
            <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
              Add new UPI
            </Text>
          </TouchableOpacity>
        </View> */}
      

      {/* Withdraw button for bottom */}
      <View style={{flex: 0.8,}}>
        <View
          style={{flex: 0.6, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',

              width: 350,
              borderRadius: 10,
              height: 55,
              borderColor: 'white',
              backgroundColor: 'white',
            }}
            onPress={() => alert('Choose UPI to withdraw.')}>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              Withdraw Money
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChooseUpiFlatList;
// Later on in your styles..
