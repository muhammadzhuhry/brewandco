import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { IconArrowLeft, IconLock, IconMessage, IconShow } from '../../assets'
import { VerticalLine } from '../../components'
import { COLOR, SIZE } from '../../utils'

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
      <View style={styles.wrapperInput}>
        <View style={styles.emailSection} >
          <IconMessage style={styles.emailIcon} />
          <VerticalLine width={1} height="60%" marginRight={5} color={COLOR.grayBlue} />
          <TextInput style={styles.emailInput} placeholder="Email address" />
        </View>
        <View style={styles.passwordSection}>
          <IconLock style={styles.passwordIcon} />
          <VerticalLine width={1} height="60%" marginRight={5} color={COLOR.grayBlue} />
          <TextInput style={styles.passwordInput} placeholder="Password" secureTextEntry={true} />
          <IconShow />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textForgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.wrapperSignup}>
        <Text style={styles.textSignup}>New member? <Text style={styles.textSignupHighlight}>Sign up</Text></Text>
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
  wrapperInput: {
    marginBottom: 30
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
    flex: 1
  },
  passwordSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: COLOR.grayBlue
  },
  passwordIcon: {
    marginRight: 10
  },
  passwordInput: {
    flex: 1
  },
  button: {
    borderRadius: 100,
    paddingVertical: 12,
    backgroundColor: COLOR.midnightBlue,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: COLOR.white
  },
  textForgot: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue,
    textDecorationLine: 'underline'
  },
  wrapperSignup: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: SIZE.height * 0.05
  },
  textSignup: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLOR.grayBrown,
  },
  textSignupHighlight: {
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue,
  }
})
