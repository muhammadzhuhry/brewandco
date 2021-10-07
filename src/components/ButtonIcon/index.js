import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IconArrowRight } from '../../assets'
import { COLOR } from '../../utils'

const ButtonIcon = ({ width, height, bRadius, color, iconName, onPress }) => {
  const Icon = () => {
    switch (iconName) {
      case 'arrow-right':
        return <IconArrowRight />

      default: 
        return null
    }
  }
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.button(width, height, bRadius, color)}> 
      <Icon />      
    </TouchableOpacity>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
  button: (width, height, bRadius, color) => ({
    width: width ? width : 65,
    height: height ? height : 65,
    borderRadius: bRadius ? bRadius : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color ? color : COLOR.midnightBlue
  })
})
