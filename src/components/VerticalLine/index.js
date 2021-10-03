import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLOR } from '../../utils'

const VerticalLine = ({ width, height, color, mRight, mLeft }) => {
  return (
    <View style={styles.verticalLine(width, height, color, mRight, mLeft)} />
  )
}

export default VerticalLine

const styles = StyleSheet.create({
  verticalLine: (width, height, color, mRight, mLeft) => ({
    width: width ? width : 1,
    height: height ? height : '100%',
    marginRight: mRight ? mRight : 0,
    marginLeft: mLeft ? mLeft : 0,
    backgroundColor: color ? color : COLOR.midnightBlue
  })
})
