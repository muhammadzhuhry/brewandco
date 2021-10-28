import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconOrderSuccess } from '../../assets'
import { Button } from '../../components'
import { COLOR } from '../../utils'

const OrderSuccess = ({ navigation }) => {
  const homeHandler = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperContent}>
        <IconOrderSuccess />
        <Text style={styles.title}>Order Success</Text>
        <Text style={styles.paragraph}>Your order has been placed successfully.</Text>
        <Text style={styles.paragraph}>For more details, go to my orders.</Text>
      </View>
      <View style={styles.wrapperBottom}>
        <Button
          color={COLOR.midnightBlue} 
          bRadius={100} 
          pVertical={12}
          mBottom={100}
          onPress={homeHandler}
          text="Back To Home"
        />
      </View>
    </View>
  )
}

export default OrderSuccess

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: COLOR.white,
  },
  wrapperContent: {
    alignItems: 'center',
    marginTop: 50
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlack,
    marginTop: 30,
    marginBottom: 20
  },
  paragraph: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLOR.grayBrown
  },
  wrapperBottom: {
    flex: 1,
    justifyContent: 'flex-end'
  }
})
