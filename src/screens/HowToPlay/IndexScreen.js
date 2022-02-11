import React ,{useState,useRef} from 'react';
import { Text, FlatList, View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Slides from './Slides';
import HowtoplayItems from './HowtoplayItems'
import PaginatorDot from './PaginatorDot';


const IndexScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollx=useRef(new Animated.Value(0)).current;
  const slidesRef=useRef(null);

  const viewableItemsChanged=useRef(({viewableItems})=>{
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig=useRef({viewAreaCoveragePercentThreshold:50}).current;


  return (
    <LinearGradient
      colors={['#0A2133', '#4cd4ca']} style={{ flex: 1, justifyContent: 'center' }}>
      <View style={styles.container}>
        <FlatList
          data={Slides}
          renderItem={({ item }) => <HowtoplayItems item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset:{ x: scrollx }}}],
            {
              useNativeDriver:false,
            })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
      />
      </View>
      <PaginatorDot data={Slides} scrollx={scrollx}/>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default IndexScreen;
