import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { HistoryOrder } from '../../components';
import { COLOR } from '../../utils';

const Order = () => {
  return (
    <ScrollView style={{ backgroundColor: COLOR.white }}>
      <View style={styles.container}>
        <Text style={styles.title}>My Order</Text>
        <HistoryOrder name="Americano"  date="24 June" time="12:33 PM" status={0} price={3} />
        <HistoryOrder name="Flat White"  date="24 June" time="12:31 PM" status={0} price={4.5} />
        <HistoryOrder name="Mocha"  date="24 June" time="12:30 PM" status={0} price={4} />
        <HistoryOrder name="Cappuccino"  date="23 June" time="07:45 AM" status={1} price={5.5} />
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
  }
})
