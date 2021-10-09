import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { HistoryOrder } from '../../components';
import { COLOR } from '../../utils';

const Order = () => {
  return (
    <ScrollView style={{ backgroundColor: COLOR.white }}>
      <View style={styles.container}>
        <Text style={styles.title}>My Order</Text>
        <HistoryOrder name="Americano"  date="24 June" time="12:30 PM" status={0} price={3} />
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
