import React from 'react';
import { Text, FlatList,View,StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Slides from './Slides';
import HowtoplayItems from './HowtoplayItems'

const IndexScreen = () => {
  return (
    <LinearGradient
      colors={['#0A2133', '#4cd4ca']} style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
    <View style={styles.container}>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <HowtoplayItems item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
      />
    </View>
    </LinearGradient>
  )
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default IndexScreen;
