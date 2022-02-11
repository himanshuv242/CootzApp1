import React, { useState } from 'react'
import { View, Text, Modal, Image, Button } from 'react-native'
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import ContestsData from './ContestsData'

const Trivia = () => {
  const [show, setShow] = useState(false);

  const [contest, setContest] = useState("IIT");
  const [icon, setIcon] = useState("icon");
  const [image, setImage] = useState('../../assets/user.png');

  const onPress = () => alert("hi")

  return (

    <View style={{ backgroundColor: '#027d81', height: 600, borderTopWidth: 2, borderTopColor: 'black' }}>
              {/* Joining Modal */}
      <Modal visible={show} transparent={true} style={{}}>
        <View style={{ backgroundColor: '#000000aa', flex: 1, }}>
          <View style={{ backgroundColor: '#247174', flex: 1, alignItems: 'center', marginVertical: 220, marginHorizontal: 20, borderRadius: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 16 }}>
              <View style={{ width: 300, alignItems: 'center' }}>
                <Text>{icon}</Text>
              </View>
              <View style={{}}>
                <Text onPress={() => { setShow(false) }} style={{ backgroundColor: '#000000', height: 25, width: 25, borderRadius: 12, textAlign: 'center', fontSize: 15, color: 'white' }}>x</Text>
              </View>
            </View>

            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{contest} CONTEST</Text>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, flexDirection: 'column', marginLeft: 40 }}>
                <Image source={require('../../assets/user.png')}
                  style={{ height: 80, width: 80, borderRadius: 5, backgroundColor: 'black' }}
                />
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'center', width: 80 }}>You</Text>
              </View>

              <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center', width: 60 }}>VS !</Text>

              <View style={{ flex: 1, flexDirection: 'column', marginRight: 10, marginLeft: 20 }}>
                <Image source={require('../../assets/user.png')}
                  style={{ height: 80, width: 80, borderRadius: 5, backgroundColor: 'black' }}
                />
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'orange', width: 80, textAlign: 'center' }}>Player 2</Text>
              </View>
            </View>

            <TouchableOpacity
              onPress={onPress}
              style={{ elevation: 8, marginBottom: 18 }}
              activeOpacity={0.8}
            >
              <LinearGradient colors={['orange', 'red']} style={{ backgroundColor: 'orange', borderRadius: 10, width: 320, height: 45, alignItems: 'center', padding: 10 }}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }} >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>PLAY</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/*Hosted Contests  */}
      <ScrollView style={{ marginTop: 10, marginBottom: 50, }}>

        {ContestsData.map(element => {
          const slotbar = 350 * (element.SlotsLeft / element.TotalSlot);
          const showModal = () => {
            setContest(element.Name);
            setShow(true);
          }

          return (
            <View onStartShouldSetResponder={() => { showModal() }} key={element.id} style={{ alignItems: 'center' }}>

              <View style={{ flex: 1, backgroundColor: 'white', marginBottom: 15, width: 350, borderRadius: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', padding: 6 }}>
                  <Text style={{ marginRight: 20, fontWeight: 'bold', color: 'black', fontSize: 15 }}>Icon</Text>
                  <Text style={{ marginRight: 20, fontWeight: 'bold', color: 'black', fontSize: 15 }}>{element.Name}</Text>
                  <View >
                    <Text style={{ marginRight: 20, fontWeight: 'bold', color: 'black', fontSize: 15 }}>{element.Time}</Text>
                    <Text style={{ marginRight: 10, fontSize: 10, color: 'black' }}>Contest Time</Text>
                  </View>
                </View>
                <View style={{ backgroundColor: '#dddddd', height: 45, borderBottomRightRadius: 10, borderBottomStartRadius: 10, }}>
                  <View style={{ flexDirection: 'row', marginHorizontal: 12, justifyContent: 'space-between', }}>
                    <Text style={{ color: 'black', }}>{element.SlotsLeft} Slots Left</Text>
                    <Text style={{ color: 'black' }}>{element.TotalSlot} Slots</Text>
                  </View>
                  <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 8, marginTop: 10, width: 350, }}>
                    <View style={{ backgroundColor: 'black', height: 8, width: slotbar, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}></View>
                  </View>

                </View>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Trivia
