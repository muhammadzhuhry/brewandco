import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconCart } from '../../assets';
import { LoyaltyCard, MenuItem } from '../../components';
import { COLOR } from '../../utils';

const Home = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [menus, setMenus] = useState([{}]);
  const refMenus = firestore().collection('menus');
  
  useEffect(() => {
    getData();
    fetchMenus();
  }, [])

  const getData = async () => {
    const getUserdata = await AsyncStorage.getItem('userdata')
    setUser(JSON.parse(getUserdata));
  };

  const fetchMenus = async () => {
    const query = await refMenus.get();
    let list = [];
    query.forEach(async item => {
      const { name, price } = item.data()
      list.push({
        id: item.id,
        name,
        price
      })
    });
    await setMenus(list);
  }

  const menuHandler = (item) => {
    navigation.navigate('Detail', item)
  }

  const cartHandler = () => {
    navigation.navigate('Cart')
  }

  return (
    <ScrollView style={{ backgroundColor: COLOR.midnightBlue }}>
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <View>
            <Text style={styles.greeting}>Good morning</Text>
            <Text style={styles.name}>{user.name || 'Name' }</Text>
          </View>
          <TouchableOpacity onPress={cartHandler}>
            <IconCart />
          </TouchableOpacity>
        </View>
        <LoyaltyCard ordered={6} />
      </View>
      <View style={{ backgroundColor: COLOR.white }}>
      <View style={styles.containerMenu}>
        <Text style={styles.menuTitle}>Choose your coffee</Text>
        <View style={styles.itemBox}>
          {
            menus.map((item,index) => {
              return(
                <MenuItem key={index} name={item.name} onPress={() => menuHandler(item)} />
              )
            })
          }
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
