import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HorizontalLine from '../HorizontalLine'
import { COLOR } from '../../utils'
import { IconCoffeeActive } from '../../assets'

const HistoryOrder = ({ name, date, time, status, price }) => {
  const Status = () => {
    return status == 1 ? 'order completed.' : 'now brewing ~'
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.datetime}>{date} | {time}</Text>
        <View style={styles.row}>
          <View style={styles.icon}>
            <IconCoffeeActive />
          </View>
          <View style={styles.item}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.status}>
                <Status />
              </Text>
            </View>
            {/* price.toFixed(2) still bug need to fix later */}
            <Text style={styles.price}>${price}</Text>
          </View>
        </View>
      </View>
      <HorizontalLine height={2} color={COLOR.whiteBrown} />
    </View>
  )
}

export default HistoryOrder

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20
  },
  datetime: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: COLOR.whiteGray
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7
  },
  icon: {
    marginRight: 15
  },
  item: { 
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue
  },
  status: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: COLOR.grayBrown
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue
  }
})
