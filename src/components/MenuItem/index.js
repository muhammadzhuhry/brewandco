import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { Americano, Cappucino, flatWhite, Mocha } from '../../assets';
import { COLOR } from '../../utils';

const MenuItem = ({ name, onPress }) => {

  const Images = () => {
    switch(name) {
      case 'Americano':
        return <Image style={styles.menuImage} source={Americano} />
      case 'Cappucino':
        return <Image style={styles.menuImage} source={Cappucino} />
      case 'Flat White':
        return <Image style={styles.menuImage} source={flatWhite} />
      case 'Mocha':
        return <Image style={styles.menuImage} source={Mocha} />
      default:
        return <Image style={styles.menuImage} source={Americano} />
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.menuItem} onPress={onPress}>
        <Images />
        <Text style={styles.menuName}>{name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MenuItem

const styles = StyleSheet.create({
  menuItem: {
    marginTop: 20,
    borderRadius: 15,
    width: 155,
    height: 165,
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
    backgroundColor: COLOR.white
  },
  menuImage: {
    width: 105,
    height: 90,
  },
  menuName: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
    color: COLOR.midnightBlue
  },
})
