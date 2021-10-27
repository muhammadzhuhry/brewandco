import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import { COLOR } from '../../utils'

const OptionQty = ({ name, value, setValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <NumericInput
        rounded
        minValue={0}
        maxValue={10}
        value={value}
        onChange={value => setValue(value)}
        totalWidth={80}
        totalHeight={35}
        containerStyle={{ 
          borderColor: COLOR.whiteBlue, 
          borderRadius: 50
        }}
        inputStyle={{ 
          color: COLOR.midnightBlack,
          // paddingVertical: 4 
        }}
        iconStyle={{ 
          color: COLOR.midnightBlack,
          // paddingVertical: 4 
        }}
        borderColor={COLOR.white}
        leftButtonBackgroundColor={COLOR.whiteBlue}
        rightButtonBackgroundColor={COLOR.whiteBlue}
      />
    </View>
  )
}

export default OptionQty

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
