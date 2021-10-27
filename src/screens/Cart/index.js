import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Americano, Cappucino, flatWhite, IconArrowLeft, IconDelete, Mocha } from '../../assets'
import { Button } from '../../components'
import { COLOR } from '../../utils'

const Cart = ({ navigation }) => {
  const clickBackHandler = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={clickBackHandler}>
          <IconArrowLeft />
        </TouchableOpacity>
        <Text style={styles.title}>My Cart</Text>
      </View>
      <View style={styles.cart}>
        <View style={styles.item}>
          <View style={styles.menu}>
            <Image source={Americano} style={styles.menuImage} />
            <View>
              <Text style={styles.menuName}>Americano</Text>
              <Text style={styles.menuOptions}>hot | small</Text>
              <Text style={styles.menuPrice}>$3.00</Text>
            </View>
            <Text style={styles.menuQty}>x 1</Text>
          </View>
          <View style={styles.delete}>
            <IconDelete />
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.menu}>
            <Image source={Cappucino} style={styles.menuImage} />
            <View>
              <Text style={styles.menuName}>Cappuccino</Text>
              <Text style={styles.menuOptions}>iced | medium</Text>
              <Text style={styles.menuPrice}>$3.00</Text>
            </View>
            <Text style={styles.menuQty}>x 1</Text>
          </View>
          <View style={styles.delete}>
            <IconDelete />
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.menu}>
            <Image source={flatWhite} style={styles.menuImage} />
            <View>
              <Text style={styles.menuName}>Flat White</Text>
              <Text style={styles.menuOptions}>hot | large</Text>
              <Text style={styles.menuPrice}>$3.00</Text>
            </View>
            <Text style={styles.menuQty}>x 1</Text>
          </View>
          <View style={styles.delete}>
            <IconDelete />
          </View>
        </View>
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
  cart: {
    marginTop: 30
  },
  item: {
    flexDirection: 'row',
    marginBottom: 20
  },
  menu: {
    flex: 3,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR.whiteBlue
  },
  menuImage: {
    width: 80,
    height: 55
  },
  menuName: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue,
  },
  menuOptions: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: COLOR.grayBrown
  },
  menuPrice: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue
  },
  menuQty: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack
  },
  delete: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#FFE5E5',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
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
