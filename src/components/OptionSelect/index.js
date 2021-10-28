import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconHot, IconIced } from '../../assets'
import { COLOR } from '../../utils'

const OptionSelect = ({ hot, iced, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select</Text>
      <View style={styles.item}>
        <TouchableOpacity 
          onPress={() => onPress('hot')}
          style={{ marginRight: 25 }}
        >
          <IconHot style={styles.option(hot)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress('iced')}>
          <IconIced style={styles.option(iced)} />
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
    color: isActive ? COLOR.midnightBlue : COLOR.whiteGray
  })
})
