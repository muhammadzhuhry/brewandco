import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconArrowLeft } from '../../assets'
import { Button, ItemCart } from '../../components'
import { COLOR } from '../../utils'

const Cart = ({ navigation }) => {
  const clickBackHandler = () => {
    navigation.goBack()
  }

  const orderHandler = () => {
    navigation.replace('OrderSuccess')
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={clickBackHandler}>
          <IconArrowLeft />
        </TouchableOpacity>
        <Text style={styles.title}>My Cart</Text>
      </View>
      <View style={styles.item}>
        <ItemCart name="Americano" qty={1} />
        <ItemCart name="Cappucino" qty={1} />
        <ItemCart name="Flat White" qty={1} />
      </View>
      <View style={styles.wrapperBottom}>
        <View style={styles.bottom}>
          <View style={{ flex: 1 }}>
            <Text style={styles.text}>Total Price</Text>
            <Text style={styles.price}>$9.00</Text>
          </View>
          <View style={styles.button}>
          <Button
            color={COLOR.midnightBlue}
            bRadius={100}
            pVertical={12}
            text="Checkout"
            onPress={orderHandler}
          />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: COLOR.white
  },
  wrapperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    width: '85%',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack,
  },
  item: {
    marginTop: 30
  },
  wrapperBottom: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: COLOR.grayBrown
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: COLOR.midnightBlue
  },
  button: {
    flex: 1,
    justifyContent: 'center'
  }
})
