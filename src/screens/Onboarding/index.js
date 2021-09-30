import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Logo, OnboardingImg } from '../../assets'
import { COLOR } from '../../utils'

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Image source={OnboardingImg} style={styles.image} resizeMode="contain" />
      <View style={styles.text}>
        <Text style={styles.quote}>{`Making your days with \nour coffee.`}</Text>
        <Text style={styles.tagline}>{`The best grain, the finest roast, the \nmost powerful flavor.`}</Text>
      </View>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 330,
    height: 205
  },
  text: {
    marginVertical: 60,
  },
  quote: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: COLOR.semiBlack, 
    textAlign: 'center'
  },
  tagline: {
    marginTop: 15,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLOR.grayBrown,
    textAlign: 'center'
  }
})
