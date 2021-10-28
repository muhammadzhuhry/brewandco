import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Americano, Cappucino, flatWhite, IconArrowLeft, IconCart, Mocha } from '../../assets'
import { Button, HorizontalLine, OptionQty, OptionSelect, OptionSize } from '../../components'
import { COLOR } from '../../utils'

const Detail = ({ route, navigation }) => {
  const [value, setValue] = React.useState(1);
  const [hot, setHot] = React.useState(true);
  const [iced, setIced] = React.useState(!hot);
  const [small, setSmall] = React.useState(true);
  const [medium, setMedium] = React.useState(false);
  const [large, setLarge] = React.useState(false);

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

  const MenuImage = () => {
    switch(route.params.menu.replace(' ', '')) {
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
        <OptionQty name={route.params.menu} value={value} setValue={setValue} />
        <HorizontalLine height={2} color={COLOR.whiteBrown} mVertical={15} />
        <OptionSelect hot={hot} iced={iced} onPress={selectHandler} />
        <HorizontalLine height={2} color={COLOR.whiteBrown} mVertical={15} />
        <OptionSize small={small} medium={medium} large={large} onPress={sizeHandler} />
        <HorizontalLine height={2} color={COLOR.whiteBrown} mVertical={15} />
      </View>
      <View style={styles.wrapperBottom}>
        <View style={styles.total}>
          <Text style={styles.title}>Total Amount</Text>
          <Text style={styles.title}>$3.00</Text>
        </View>
        <View>
          <Button
            color={COLOR.midnightBlue} 
            bRadius={100} 
            pVertical={12} 
            mTop={20} 
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
