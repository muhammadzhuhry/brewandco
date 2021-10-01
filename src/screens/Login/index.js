import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { IconArrowLeft, IconLock, IconMessage, IconShow } from '../../assets'
import { VerticalLine } from '../../components'
import { COLOR } from '../../utils'

const Login = () => {
  return (
    <View style={styles.container}>
      <IconArrowLeft />
      <View style={styles.wrapperHeader}>
        <View style={styles.text}>
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.message}>Welcome back</Text>
        </View>
      </View>
      <View style={styles.emailSection} >
        <IconMessage style={styles.emailIcon} />
        <VerticalLine width={1} height="60%" marginRight={5} color={COLOR.grayBlue} />
        <TextInput style={styles.emailInput} placeholder="Email address" />
      </View>
      <View style={styles.passwordSection}>
        <IconLock style={styles.passwordIcon} />
        <VerticalLine width={1} height="60%" marginRight={5} color={COLOR.grayBlue} />
        <TextInput style={styles.passwordInput} placeholder="Password" />
        <IconShow />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingVertical: 30,
    paddingHorizontal: 40
  },
  text: {
    marginVertical: 40
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: COLOR.semiBlack
  },
  message: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLOR.grayBrown
  },
  emailSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.grayBlue,
    marginBottom: 20
  },
  emailIcon: {
    marginRight: 10
  },
  emailInput: {
    flex: 1,
  },
  passwordSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.grayBlue,
    marginBottom: 20
  },
  passwordIcon: {
    marginRight: 10
  },
  passwordInput: {
    flex: 1
  }
})
