import React from 'react';
import hexToRgba from 'hex-to-rgba';
import { COLOR, SIZE } from '../../utils';
import { Logo, SplashBg } from '../../assets';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const Splash = () => {
  return (
    <ImageBackground source={SplashBg} style={styles.container}>
      <View style={styles.overlay} />
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.quote}>Ordinary Coffee House</Text>
    </ImageBackground>
)
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlay: {
    width: SIZE.width,
    height: SIZE.height,
    position: 'absolute',
    backgroundColor: hexToRgba('#1D2335', '0.37')
  },
  logo : {
    width: 120,
    height: 130,
    marginTop: -100
  },
  quote: {
    marginTop: 25,
    color: COLOR.whiteCream, 
    fontSize: 24,
    fontFamily: 'Poppins-Regular'
  }
})