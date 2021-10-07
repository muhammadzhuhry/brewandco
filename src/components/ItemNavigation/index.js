import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Home, Order, Reward } from '../../assets'
import { COLOR } from '../../utils';

const ItemNavigation = ({ isFocused, onPress, onLongPress, label, index }) => {
  const ImageIcon = () => {
    switch(label) {
      case 'Home':
        return <Image source={Home} style={styles.icon(isFocused)} />
      case 'Reward':
        return <Image source={Reward} style={styles.icon(isFocused)} />
      case 'Order':
        return <Image source={Order} style={styles.icon(isFocused)} />
      default:
        return <Image source={Home} style={styles.icon(isFocused)} />
    }
  };
  
  return (
    <TouchableOpacity
      key={index}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <ImageIcon />
    </TouchableOpacity>
  )
}

export default ItemNavigation

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  icon: (isFocused) => ({
    width: 23,
    height: 23,
    tintColor: isFocused ? COLOR.midnightBlue : COLOR.whiteGray
  })
})
