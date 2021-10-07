import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HorizontalLine from '../HorizontalLine'
import { COLOR } from '../../utils'

const HistoryReward = ({ name, date, time, point }) => {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.datetime}>{date} | {time}</Text>
        </View>
        <Text style={styles.point}>+ {point} Pts</Text>
      </View>
      <HorizontalLine height={2} color={COLOR.whiteBrown} />
    </View>
  )
}

export default HistoryReward

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  name: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue
  },
  datetime: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: COLOR.grayBrown
  },
  point: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue
  }
})
