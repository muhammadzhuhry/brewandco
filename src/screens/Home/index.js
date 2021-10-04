import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconCart, IconCoffee, IconCoffeeActive } from '../../assets';
import { COLOR, SIZE } from '../../utils';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapperHeader}>
        <View>
          <Text style={styles.greeting}>Good morning</Text>
          <Text style={styles.name}>Anderson</Text>
        </View>
        <TouchableOpacity>
          <IconCart />
        </TouchableOpacity>
      </View>
      <View style={styles.loyaltyCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
          <Text style={styles.loyaltyText}>Loyalty card</Text>
          <Text style={styles.loyaltyText}>4 / 8</Text>
        </View>
        <View style={styles.loyaltyItem}>
          <IconCoffeeActive />
          <IconCoffeeActive />
          <IconCoffeeActive />
          <IconCoffeeActive />
          <IconCoffee />
          <IconCoffee />
          <IconCoffee />
          <IconCoffee />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingVertical: 30,
    paddingHorizontal: 30
  }, 
  wrapperHeader: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  greeting: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.whiteGray
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack
  },
  loyaltyCard: {
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 12, 
    backgroundColor: COLOR.midnightBlue
  },
  loyaltyText: {
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
