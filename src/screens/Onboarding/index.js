import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { OnboardingImg, IconArrowRight } from '../../assets'
import { COLOR, SIZE } from '../../utils'

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <Image source={OnboardingImg} style={styles.image} resizeMode="contain" />
        <View style={styles.text}>
          <Text style={styles.quote}>{`Making your days with \nour coffee.`}</Text>
          <Text style={styles.tagline}>{`The best grain, the finest roast, the \nmost powerful flavor.`}</Text>
        </View>
      </View>
      {/* build in Button cannot be customized */}
      <View style={styles.wrapperButton}>
        <TouchableOpacity style={styles.button}> 
          <IconArrowRight />
        </TouchableOpacity>
      </View>
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
    marginTop: SIZE.height * 0.09, // hardcode 60px
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
    marginTop: 50,
    alignItems: 'flex-end',
  },
  button: {
    width: 65,
    height: 65,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZE.width * 0.12, // hardcode 50px
    backgroundColor: COLOR.midnightBlue
  }
})
