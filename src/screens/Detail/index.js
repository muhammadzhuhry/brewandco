import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Americano, Cappucino, flatWhite, IconArrowLeft, IconCart, Mocha } from '../../assets'
import { Button, HorizontalLine, OptionQty, OptionSelect, OptionSize } from '../../components'
import { COLOR } from '../../utils'

const Detail = ({ route, navigation }) => {
  const [value, setValue] = useState(1);
  const [hot, setHot] = useState(true);
  const [iced, setIced] = useState(false);
  const [small, setSmall] = useState(true);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);

  let menu = {
    name: route.params.name,
    qty: value,
    price: 0,
    select: '',
    size: ''
  };

  let price = parseInt(route.params.price);
  price *= value;

  menu.price = price;
  menu.select = hot ? 'hot' : iced ? 'iced' : '';
  menu.size = small ? 'small' : medium ? 'medium' : large ? 'large' : '';

  const selectHandler = (state) => {
    switch(state) {
      case 'hot':
        setHot(true);
        setIced(false);
        break;
      case 'iced':
        setHot(false);
        setIced(true);
        break;
    }
  };

  const sizeHandler = (state) => {
    switch(state) {
      case 'small':
        setSmall(true);
        setMedium(false);
        setLarge(false);
        break;
      case 'medium':
        setSmall(false);
        setMedium(true);
        setLarge(false);
        break;
      case 'large':
        setSmall(false);
        setMedium(false);
        setLarge(true);
        break;
    }
  }

  const clickBackHandler = () => {
    navigation.goBack()
  }

  const cartHandler = () => {
    navigation.navigate('Cart')
  }

  const addToCartHandler = async () => {
    const getUsercart = await AsyncStorage.getItem('usercart');
    if (getUsercart == null) {
      await AsyncStorage.setItem('usercart', JSON.stringify([menu]));
    } else {
      let newCart = JSON.parse(getUsercart)
      newCart.push(menu)
      await AsyncStorage.setItem('usercart', JSON.stringify(newCart))
    }
    navigation.replace('Cart');
  }

  const MenuImage = () => {
    switch(route.params.name.replace(' ', '')) {
      case 'Americano':
        return <Image style={styles.image} source={Americano} />
      case 'Cappucino':
        return <Image style={styles.image} source={Cappucino} />
      case 'FlatWhite':
        return <Image style={styles.image} source={flatWhite} />
      case 'Mocha':
        return <Image style={styles.image} source={Mocha} />
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <TouchableOpacity onPress={clickBackHandler}>
          <IconArrowLeft />
        </TouchableOpacity>
        <Text style={styles.title}>Details</Text>
        <TouchableOpacity onPress={cartHandler}>
          <IconCart />
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <MenuImage />
      </View>
      <View style={styles.options}>
        <OptionQty name={route.params.name} value={value} setValue={setValue} />
        <HorizontalLine height={2} color={COLOR.whiteBrown} mVertical={15} />
        <OptionSelect hot={hot} iced={iced} onPress={selectHandler} />
        <HorizontalLine height={2} color={COLOR.whiteBrown} mVertical={15} />
        <OptionSize small={small} medium={medium} large={large} onPress={sizeHandler} />
        <HorizontalLine height={2} color={COLOR.whiteBrown} mVertical={15} />
      </View>
      <View style={styles.wrapperBottom}>
        <View style={styles.total}>
          <Text style={styles.title}>Total Amount</Text>
          <Text style={styles.title}>${price.toFixed(2)}</Text>
        </View>
        <View>
          <Button
            color={COLOR.midnightBlue} 
            bRadius={100} 
            pVertical={12} 
            mTop={20}
            onPress={addToCartHandler}
            text="Add To Cart"
          />
        </View>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: COLOR.white
  },
  wrapperHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack
  },
  menu: {
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 70,
    alignItems: 'center',
    backgroundColor: COLOR.whiteBlue,
  },
  image: {
    width: 170,
    height: 120
  },
  options: {
    marginTop: 25
  },
  wrapperBottom: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
