import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import VerticalLine from '../VerticalLine'
import { IconLock, IconShow } from '../../assets'
import { COLOR } from '../../utils'

const PasswordField = ({ placeholder, value, onChangeText }) => {
  // const [val, setVal] = React.useState(true);
  // const handleClick = () => {
  //   setVal(!value);
  // }

  return (
    <View style={styles.input}>
      <IconLock />
      <VerticalLine width={1} height="60%" mRight={0} mLeft={10} color={COLOR.grayBlue} />
      <TextInput
        style={styles.passwordInput}
        value={value} 
        placeholder={placeholder}
        onChangeText={onChangeText} 
        secureTextEntry={true}
      />
      <TouchableOpacity>
        <IconShow />
      </TouchableOpacity>
    </View> 
  )
}

export default PasswordField

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.grayBlue,
    marginBottom: 20
  },
  passwordInput: {
    flex: 1
  }
})
