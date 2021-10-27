import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NumericInput from 'react-native-numeric-input'
import { Americano, Cappucino, flatWhite, Hot, Ice, IconArrowLeft, IconCart, Large, Medium, Mocha, Small } from '../../assets'
import { Button, HorizontalLine } from '../../components'
import { COLOR } from '../../utils'

const Detail = () => {
  const [value, setValue] = React.useState(1);
  const [hot, setHot] = React.useState(true);
  const [ice, setIce] = React.useState(!hot);
  const [small, setSmall] = React.useState(true);
  const [medium, setMedium] = React.useState(false);
  const [large, setLarge] = React.useState(false);

  const selectHandler = (state) => {
    switch(state) {
      case 'hot':
        setHot(true);
        setIce(false);
        break;
      case 'ice':
        setHot(false);
        setIce(true);
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

  return (
    <View style={styles.container}>
      <View style={styles.wrapperHeader}>
        <TouchableOpacity>
          <IconArrowLeft />
        </TouchableOpacity>
        <Text style={styles.title}>Details</Text>
        <TouchableOpacity>
          <IconCart />
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <Image style={styles.image} source={Cappucino} />
      </View>
      <View style={styles.options}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Cappuccino</Text>
          <NumericInput
            rounded
            value={value}
            minValue={0}
            maxValue={10}
            onChange={value => setValue(value)}
            totalWidth={80}
            totalHeight={35}
            containerStyle={{ 
              borderColor: COLOR.whiteBlue, 
              borderRadius: 50
            }}
            inputStyle={{ 
              color: COLOR.midnightBlack,
              // paddingVertical: 4 
            }}
            iconStyle={{ 
              color: COLOR.midnightBlack,
              // paddingVertical: 4 
            }}
            borderColor={COLOR.white}
            rightButtonBackgroundColor={COLOR.whiteBlue}
            leftButtonBackgroundColor={COLOR.whiteBlue}
          />
        </View>
        <HorizontalLine height={2} color={COLOR.whiteBrown} mVertical={15} />
        <View style={styles.item}>
            <Text style={styles.itemText}>Select</Text>
            <View style={styles.select}>
              <TouchableOpacity onPress={() => selectHandler('hot')} style={{ marginRight: 25 }}>
                <Image source={Hot} style={styles.itemSelect(hot)} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => selectHandler('ice')}>
                <Image source={Ice} style={styles.itemSelect(ice)} />
              </TouchableOpacity>
            </View>
        </View>
        <HorizontalLine height={2} color={COLOR.whiteBrown} mVertical={15} />
        <View style={styles.item}>
            <Text style={styles.itemText}>Size</Text>
            <View style={styles.select}>
              <TouchableOpacity onPress={() => sizeHandler('small')}>
                <Image source={Small} style={styles.itemSize(small)} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => sizeHandler('medium')} style={{ marginHorizontal: 25 }}>
                <Image source={Medium} style={styles.itemSize(medium)} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => sizeHandler('large')}>
                <Image source={Large} style={styles.itemSize(large)} />
              </TouchableOpacity>
            </View>
        </View>
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
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'flex-end'  
  },
  itemSelect: (isActive) => ({
    tintColor: isActive ? COLOR.midnightBlue : COLOR.whiteGray
  }),
  itemSize: (isActive) => ({
    tintColor: isActive ? COLOR.midnightBlue : COLOR.whiteGray
  }),
  wrapperBottom: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
