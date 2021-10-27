import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconCart } from '../../assets';
import { LoyaltyCard, MenuItem } from '../../components';
import { COLOR } from '../../utils';

const Home = ({ navigation }) => {
  const clickHandler = (menu) => {
    navigation.navigate('Detail', { menu })
  }

  return (
    <ScrollView style={{ backgroundColor: COLOR.midnightBlue }}>
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <View>
            <Text style={styles.greeting}>Good morning</Text>
            <Text style={styles.name}>Anderson</Text>
          </View>
          <TouchableOpacity>
            <IconCart />
          </TouchableOpacity>
        </View>
        <LoyaltyCard ordered={6} />
      </View>
      <View style={{ backgroundColor: COLOR.white }}>
      <View style={styles.containerMenu}>
        <Text style={styles.menuTitle}>Choose your coffee</Text>
        <View style={styles.itemBox}>
          <MenuItem name="Americano" onPress={() => clickHandler('Americano')} />
          <MenuItem name="Cappucino" onPress={() => clickHandler('Cappucino')} />
          <MenuItem name="Mocha" onPress={() => clickHandler('Mocha')} />
          <MenuItem name="Flat White" onPress={() => clickHandler('Flat White')} />
        </View>
      </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: COLOR.white
  }, 
  wrapperHeader: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  greeting: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.whiteGray
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack
  },
  containerMenu: {
    backgroundColor: COLOR.midnightBlue,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 25,
    paddingHorizontal: 30
  },
  menuTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLOR.whiteGray
  },
  itemBox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
