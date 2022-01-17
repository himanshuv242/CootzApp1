import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, } from 'react-native';

const HowtoplayItems = ({ item }) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Text style={styles.title}>{item.Title}</Text>
      <Text style={styles.desc}>{item.Desc}</Text>
      <Image source={item.Image} style={[styles.image,{width,resizeMode:'contain'}]} />
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    flex:0.7,
    justifyContent:'center'
  },
  title:{
    flex:0.06,
    fontSize:30,
    color:'white',
    fontWeight:'bold'
  },
  desc:{
    flex:0.1,
    width:300,
    textAlign:'center',
    fontSize:14,
    color:'white',
    
  }
})

export default HowtoplayItems;
