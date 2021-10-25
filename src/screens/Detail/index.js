import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import { Americano, Cappucino, flatWhite, IconArrowLeft, IconCart, Mocha } from '../../assets'
import { HorizontalLine } from '../../components'
import { COLOR } from '../../utils'

const Detail = () => {
  const [value, setValue] = React.useState(1)

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <TouchableOpacity>
          <IconArrowLeft />
        </TouchableOpacity>
        <Text style={styles.title}>Details</Text>
        <TouchableOpacity>
          <IconCart />
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <Image style={styles.image} source={Cappucino} />
      </View>
      <View style={styles.options}>
        <View style={styles.item}>
          <Text>Cappuccino</Text>
          <NumericInput
            rounded
            value={value}
            minValue={0}
            maxValue={10}
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
            rightButtonBackgroundColor={COLOR.whiteBlue}
            leftButtonBackgroundColor={COLOR.whiteBlue}
          />
        </View>
        <HorizontalLine height={2} color={COLOR.whiteBrown} mVertical={15} />
        <View style={styles.item}>
            <Text>Select</Text>
        </View>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: COLOR.white
  },
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack
  },
  menu: {
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 70,
    alignItems: 'center',
    backgroundColor: COLOR.whiteBlue,
  },
  image: {
    width: 170,
    height: 120
  },
  options: {
    marginTop: 25
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
