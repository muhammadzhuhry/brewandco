import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconCoffeeActive, IconCoffee } from '../../assets'
import { COLOR } from '../../utils';

const LoyaltyCard = ({ ordered }) => {
  let maxOrder = 8;

  ordered > maxOrder ? ordered = maxOrder : ordered;
  let itemCoffee = []

  for (let i = 0; i < ordered; i++) {
    itemCoffee.push(<IconCoffeeActive key={i}/>);
  }

  for (let j = 0; j < maxOrder - ordered; j++) {
    itemCoffee.push(<IconCoffee key={j+ordered}/>);
  }


  return (
    <View style={styles.loyaltyCard}>
      <View style={styles.loyaltyText}>
        <Text style={styles.text}>Loyalty card</Text>
        <Text style={styles.text}>{ordered} / {maxOrder}</Text>
      </View>
      <View style={styles.loyaltyItem}>
        { itemCoffee }
      </View>
    </View>
  )
}

export default LoyaltyCard

const styles = StyleSheet.create({
  loyaltyCard: {
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 12, 
    backgroundColor: COLOR.midnightBlue
  },
  loyaltyText: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.whiteGray
  },
  loyaltyItem: {
    padding: 14,
    marginTop: 5,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLOR.white
  }
})
