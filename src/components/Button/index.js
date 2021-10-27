import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { COLOR } from '../../utils'

const Button = ({ color, bRadius, pVertical, mBottom, mTop, onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button(color, bRadius, pVertical, mBottom, mTop)}>
      <Text style={styles.buttonText}>{ text ? text : "Button" }</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: (color, bRadius, pVertical, mBottom, mTop) => ({
    borderRadius: bRadius ? bRadius : 0,
    paddingVertical: pVertical ? pVertical : 0,
    marginBottom: mBottom ? mBottom : 0,
    marginTop: mTop ? mTop : 0,
    backgroundColor: color ? color : COLOR.midnightBlue
  }),
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: COLOR.white
  }
})
