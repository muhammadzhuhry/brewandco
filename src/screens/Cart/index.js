import dateFormat from 'dateformat';
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconArrowLeft } from '../../assets'
import { Button, ItemCart } from '../../components'
import { calculateSum, COLOR } from '../../utils'

const Cart = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [userId, setUserId] = useState('');
  const refOrders = firestore().collection('orders');
 
  useEffect(() => {
    getData();
  }, [])

  // const sum = items.map(item => item['price']).reduce((prev, curr) => prev + curr, 0);
  const sum = calculateSum(items, 'price');

  const getData = async () => {
    const getUsercart = await AsyncStorage.getItem('usercart')
    if (getUsercart) {
      setItems(JSON.parse(getUsercart));
    } else {
      setItems([])
    }

    const getUserdata = await AsyncStorage.getItem('userdata')
    setUserId(JSON.parse(getUserdata).id)
  };

  const clickBackHandler = () => {
    navigation.goBack()
  }

  const orderHandler = () => {
    items.map(data => {
      insertOrder(data)
    })
    AsyncStorage.removeItem('usercart')
    navigation.replace('OrderSuccess')
  }

  const deleteHandler = async (index) => {
    items.splice(index, 1)
    await AsyncStorage.setItem('usercart', JSON.stringify(items))
    navigation.replace('Cart')
  }

  const insertOrder = async (payload) => {
    await refOrders.add({
      name: payload.name,
      price: payload.price,
      qty: payload.qty,
      select: payload.select,
      size: payload.size,
      userId: userId,
      orderAt: dateFormat(new Date(), 'isoDateTime')
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={clickBackHandler}>
          <IconArrowLeft />
        </TouchableOpacity>
        <Text style={styles.title}>My Cart</Text>
      </View>
      <View style={styles.item}>
        {
          items && items.map((data, index) => {
            return (
              <ItemCart 
                key={index}
                name={data.name}
                qty={data.qty}
                select={data.select}
                size={data.size}
                price={data.price}
                onPress={() => deleteHandler(index)}
              />
            )
          })
        }
      </View>
      <View style={styles.wrapperBottom}>
        <View style={styles.bottom}>
          <View style={{ flex: 1 }}>
            <Text style={styles.text}>Total Price</Text>
            <Text style={styles.price}>${sum.toFixed(2)}</Text>
          </View>
          <View style={styles.button}>
          <Button
            color={COLOR.midnightBlue}
            bRadius={100}
            pVertical={12}
            text="Checkout"
            onPress={orderHandler}
          />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: COLOR.white
  },
  wrapperHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    width: '85%',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack,
  },
  item: {
    marginTop: 30
  },
  wrapperBottom: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: COLOR.grayBrown
  },
  price: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: COLOR.midnightBlue
  },
  button: {
    flex: 1,
    justifyContent: 'center'
  }
})
