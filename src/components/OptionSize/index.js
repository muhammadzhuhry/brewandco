import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconLarge, IconMedium, IconSmall } from '../../assets'
import { COLOR } from '../../utils'

const OptionSize = ({ small, medium, large, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Size</Text>
      <View style={styles.item}>
        <TouchableOpacity onPress={() => onPress('small')}>
          <IconSmall style={styles.option(small)} />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => onPress('medium')}
          style={{ marginHorizontal: 25 }}
        >
          <IconMedium style={styles.option(medium)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress('large')}>
          <IconLarge style={styles.option(large)} />
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
