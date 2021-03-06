import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { OnboardingImg } from '../../assets'
import { ButtonIcon } from '../../components'
import { COLOR, SIZE } from '../../utils'

const Onboarding = ({ navigation }) => {
  const handleClick = () => {
    navigation.replace('Login')
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <Image source={OnboardingImg} style={styles.image} resizeMode="contain" />
        <View style={styles.text}>
          <Text style={styles.quote}>{`Making your days with \nour coffee.`}</Text>
          <Text style={styles.tagline}>{`The best grain, the finest roast, the \nmost powerful flavor.`}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.wrapperButton}>
        <ButtonIcon iconName="arrow-right" width={65} height={65} bRadius={100} color={COLOR.midnightBlue} onPress={handleClick} />
      </TouchableOpacity>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white
  },
  wrapperHeader: {
    marginVertical: SIZE.height * 0.09, // hardcode 60px
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  wrapperButton: {
    alignItems: 'flex-end',
    marginRight: SIZE.width * 0.12, // hardcode 50px
  }
})
