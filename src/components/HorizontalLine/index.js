import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLOR } from '../../utils'

const HorizontalLine = ({ width, height, color, mVertical }) => {
  return (
    <View style={styles.horizontalLine(width, height, color, mVertical)} />
  )
}

export default HorizontalLine

const styles = StyleSheet.create({
  horizontalLine: (width, height, color, mVertical) => ({
    width: width ? width : '100%',
    height: height ? height : 1,
    marginVertical: mVertical ? mVertical : 0,
    backgroundColor: color ? color : COLOR.midnightBlue
  })
})
