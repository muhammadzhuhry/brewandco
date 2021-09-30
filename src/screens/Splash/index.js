import React from 'react';
import { SIZE } from '../../utils';
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
    backgroundColor: 'rgba(29, 35, 53, 0.37)', //'#1D2335' / COLOR.whiteCream
  },
  logo : {
    width: 120,
    height: 130
  },
  quote: {
    marginTop: 25,
    color: '#FFFAF6', 
    fontSize: 24,
    fontFamily: 'Poppins-Regular'
  }
})