import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { HistoryReward, HorizontalLine, LoyaltyCard, PointCard } from '../../components';
import { COLOR } from '../../utils';

const Reward = () => {
  return (
    <ScrollView style={{  backgroundColor: COLOR.white }}>
      <View style={styles.container}>
        <Text style={styles.title}>Rewards</Text>
        <View style={styles.card}>
          <LoyaltyCard ordered={6} />
          <PointCard points={2750} />
        </View>
        <View>
          <Text style={styles.historyTitle}>History Rewards</Text>
          <HistoryReward name="Americano" date="24 June" time="12:30 PM" point={12} />
          <HistoryReward name="Cappuccino" date="25 June" time="07:30 AM" point={17} />
          <HistoryReward name="Mocha" date="26 June" time="08:30 AM" point={10} />
          <HistoryReward name="Flat White" date="26 June" time="06:30 PM" point={13} />
        </View>
      </View>
    </ScrollView>
  )
}

export default Reward

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
  card: {
    marginVertical: 25
  },
  historyTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack
  }
})
