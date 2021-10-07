import hexToRgba from 'hex-to-rgba';
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Beans } from '../../assets';
import { LoyaltyCard, PointCard } from '../../components';
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
  }
})
