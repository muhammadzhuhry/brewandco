import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { IconArrowRight } from '../../assets'
import { COLOR } from '../../utils'

const ButtonIcon = ({ width, height, bradius, color, iconName, onPress }) => {
  const Icon = () => {
    if (iconName == 'arrow-right') return <IconArrowRight />

    return null;
  }
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.button(width, height, bradius, color)}> 
      <Icon />      
    </TouchableOpacity>
  )
}

export default ButtonIcon

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
