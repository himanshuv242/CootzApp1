import React from 'react'
import { View, Text, StyleSheet, Animated, useWindowDimensions } from 'react-native'

export default function PaginatorDot({ data, scrollx }) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center', height: 40 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        // const outputRange;
        const dotWidth=scrollx.interpolate({
          inputRange,
          outputRange:[10,12,10],
          extrapolate: 'clamp'
        });

        const opacity = scrollx.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        });

        return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />;
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 5
  }
})
