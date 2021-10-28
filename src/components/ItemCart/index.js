import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Americano, Cappucino, flatWhite, IconDelete, Mocha } from '../../assets'
import { COLOR } from '../../utils'

const ItemCart = ({ name, qty }) => {
  const ItemImage = () => {
    switch(name.replace(' ', '')) {
      case 'Americano':
        return <Image style={styles.image} source={Americano} />
      case 'Cappucino':
        return <Image style={styles.image} source={Cappucino} />
      case 'FlatWhite':
        return <Image style={styles.image} source={flatWhite} />
      case 'Mocha':
        return <Image style={styles.image} source={Mocha} />
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <ItemImage />
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.options}>hot | small</Text>
          <Text style={styles.price}>$3.00</Text>
        </View>
        <Text style={styles.qty}>x {qty}</Text>
      </View>
      <View style={styles.delete}>
        <IconDelete />
      </View>
    </View>
  )
}

export default ItemCart

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row'
  },
  item: {
    flex: 3,
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.whiteBlue
  },
  image: {
    width: 80,
    height: 55
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue
  },
  options: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: COLOR.grayBrown
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue
  },
  qty: {
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
  }
})
