import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { IconCoffeeActive } from '../../assets';
import { HorizontalLine } from '../../components';
import { COLOR } from '../../utils';

const Order = () => {
  return (
    <ScrollView style={{ backgroundColor: COLOR.white }}>
      <View style={styles.container}>
        <Text style={styles.title}>My Order</Text>
        <View style={styles.historyOrder}>
          <Text style={styles.datetime}>24 June | 12:30 PM</Text>
          <View style={styles.historyItem}>
            <View style={styles.historyIcon}>
              <IconCoffeeActive />
            </View>
            <View style={styles.item}>
              <View>
                <Text style={styles.name}>Americano</Text>
                <Text style={styles.status}>now brewing ~</Text>
              </View>
              <Text style={styles.point}>$3.00</Text>
            </View>
          </View>
        </View>
        <HorizontalLine height={2} color={COLOR.whiteBrown} />
      </View>
    </ScrollView>
  )
}

export default Order

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 30
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack,
    textAlign: 'center'
  },
  historyOrder: {
    marginTop: 30,
    marginBottom: 20
  },
  datetime: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: COLOR.whiteGray
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7
  },
  historyIcon: {
    marginRight: 15
  },
  item: { 
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue
  },
  status: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: COLOR.grayBrown
  },
  point: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue
  }
})
