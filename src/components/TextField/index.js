import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import VerticalLine from '../VerticalLine'
import { IconMessage, IconPhone } from '../../assets'
import { COLOR } from '../../utils'

const TextField = ({ iconName, placeholder, value, onChangeText }) => {
  const Icon = () => {
    switch (iconName) {
      case 'message':
        return <IconMessage />
      case 'phone':
        return <IconPhone />  
      default: 
        null
    }
    return null;
  }

  return (
    <View style={styles.input}>
      <Icon />
      <VerticalLine width={1} height="60%" mRight={0} mLeft={10} color={COLOR.grayBlue} />
      <TextInput
        value={value} 
        placeholder={placeholder}
        onChangeText={onChangeText} 
      />
    </View>
  )
}

export default TextField

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.grayBlue,
    marginBottom: 20
  }
})
