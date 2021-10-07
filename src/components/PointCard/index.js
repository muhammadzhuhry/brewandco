import hexToRgba from 'hex-to-rgba'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Beans } from '../../assets'
import { COLOR } from '../../utils'

const PointCard = ({ points }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.pointTitle}>My Points:</Text>
        <Text style={styles.pointNumber}>{points}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonRedeem}>
          <Text style={styles.buttonText}>Redeem drink</Text>
        </TouchableOpacity>
        <Image source={Beans} style={styles.image} />
      </View>
    </View>
  )
}

export default PointCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingVertical: 30,
    paddingHorizontal: 25,
    borderRadius: 12, 
    backgroundColor: COLOR.midnightBlue
  },
  pointTitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.whiteGray
  },
  pointNumber: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: COLOR.whiteGray
  },
  buttonRedeem: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 12,
    height: 40,
    backgroundColor: hexToRgba('#A2CDE9', '0.19')
  },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: COLOR.whiteGray
  },
  image: {
    height: 80,
    width: 80,
    position: 'absolute',
    left: '60%',
    top: '60%',
  }
})
