import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconCart } from '../../assets';
import { COLOR } from '../../utils';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapperHeader}>
        <View>
          <Text style={styles.greeting}>Good morning</Text>
          <Text style={styles.name}>Anderson</Text>
        </View>
        <TouchableOpacity>
          <IconCart />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingVertical: 30,
    paddingHorizontal: 40 
  }, 
  wrapperHeader: {
    marginVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  greeting: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.grayBrown
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack
  }
})
