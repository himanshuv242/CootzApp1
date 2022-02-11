import React from 'react';
import {View, Text, TouchableOpacity,TextInput} from 'react-native';


const AddNewUPI = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#247174'}}>
      <View style={{flex: 0.8}}>
        <View
          style={{
            flex: 0.1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
            Enter UPI
          </Text>
        </View>
        {/* First UPI button */}
        <View
          style={{
            flex: 0.2,
            alignItems: 'center',
            justifyContent: 'center',

          }}>
            <View
              style={{
                height: 100,
                flexDirection: 'row',
                alignItems: 'center',

                
              }}>
              <TextInput
                style={{flex: 2,flexDirection: 'row',backgroundColor: '#1EB2A7',height:56,marginLeft:25,borderRadius:10,marginRight:3,color:'white',fontSize:15,fontWeight: 'bold'}}
                underlineColorAndroid={'white'}
                placeholder="   Your UPI ID"
                placeholderTextColor='white'
                >
              
              </TextInput>

              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                  width:95,
                  height:56,
                  marginRight: 25,
                  marginLeft:3,
                  borderRadius:10,
                }}>
                <Text style={{fontSize: 15,fontWeight: 'bold',color:'#247174'}}>
                  @okaxis
                </Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>

      {/* Save button for bottom */}
      <View style={{flex: 0.2}}>
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
            onPress={() => 
            {
              alert('Saving your UPI');
              
              navigation.navigate('ChooseUPI');
            }}>
            <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddNewUPI;
// Later on in your styles..
