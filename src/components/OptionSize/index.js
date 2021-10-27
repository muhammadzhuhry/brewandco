import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Large, Medium, Small } from '../../assets'
import { COLOR } from '../../utils'

const OptionSize = ({ small, medium, large, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Size</Text>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => onPress('small')}>
          <Image source={Small} style={styles.option(small)} />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => onPress('medium')}
          style={{ marginHorizontal: 25 }}
        >
          <Image source={Medium} style={styles.option(medium)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress('large')}>
          <Image source={Large} style={styles.option(large)} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OptionSize

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-end'  
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack,
  },
  option: (isActive) => ({
    tintColor: isActive ? COLOR.midnightBlue : COLOR.whiteGray
  })
})
