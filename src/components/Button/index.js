import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { COLOR } from '../../utils'

const Button = ({ width, height, bradius, color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button(width, height, bradius, color)} />
  )
}

export default Button

const styles = StyleSheet.create({
  button: (width, height, bradius, color) => ({
    width: width ? width : 65,
    height: height ? height : 65,
    borderRadius: bradius ? bradius : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color ? color : COLOR.midnightBlue
  })
})
