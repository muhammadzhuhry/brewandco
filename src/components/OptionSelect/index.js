import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Hot, Ice } from '../../assets'
import { COLOR } from '../../utils'

const OptionSelect = ({ hot, ice, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select</Text>
      <View style={styles.item}>
        <TouchableOpacity 
          onPress={() => onPress('hot')}
          style={{ marginRight: 25 }}
        >
          <Image source={Hot} style={styles.option(hot)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress('ice')}>
          <Image source={Ice} style={styles.option(ice)} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OptionSelect

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
