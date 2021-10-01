import React from 'react'
import { StyleSheet, View } from 'react-native'
import { COLOR } from '../../utils'

const VerticalLine = ({ width, height, color, marginRight }) => {
  return (
    <View style={styles.verticalLine(width, height, color, marginRight)} />
  )
}

export default VerticalLine

const styles = StyleSheet.create({
  verticalLine: (width, height, color, marginRight) => ({
    width: width ? width : 1,
    height: height ? height : '100%',
    marginRight: marginRight ? marginRight : 0,
    backgroundColor: color ? color : COLOR.midnightBlue
  })
})
