import React from 'react'
import firestore from '@react-native-firebase/firestore';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconArrowLeft } from '../../assets'
import { Button, TextField, PasswordField } from '../../components'
import { COLOR, SIZE } from '../../utils'

const Register = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ref = firestore().collection('users');

  const clickBackHandler = () => {
    navigation.goBack()
  }

  const insertUser = async () => {
    console.log(name, email, phone, password)
    await ref.add({
      name,
      email,
      phone,
      password
    });
  }

  const registerHandler = () => {
    if (email && phone && password) {
      insertUser();
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');

      return Alert.alert('success', 'silahkan tunggu', [
        { 
          text: 'Login',
          onPress: () => navigation.replace('Login')
        }
      ])
    }
    return Alert.alert('error', 'data tidak boloh kosong')
  }

  const loginHandler = () => {
    navigation.navigate('Login')
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={clickBackHandler}>
        <IconArrowLeft />
      </TouchableOpacity>
      <View style={styles.wrapperHeader}>
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.message}>Create an account here</Text>
      </View>
      <View style={styles.wrapperInput}>
        <TextField
          iconName="user"
          placeholder="Fullname"
          value={name} 
          onChangeText={name => setName(name)}
        />
        <TextField
          iconName="message"
          placeholder="Email address"
          value={email} 
          onChangeText={email => setEmail(email)}
        />
        <TextField
          iconName="phone"
          placeholder="Mobile number"
          value={phone} 
          onChangeText={phone => setPhone(phone)}
         />
        <PasswordField
          placeholder="Password"
          value={password} 
          onChangeText={password => setPassword(password)}
         />
      </View>
      <Button 
         color={COLOR.midnightBlue} 
         bRadius={100} 
        pVertical={12} 
         mBottom={20} 
         text="Register"
         onPress={registerHandler}
      />
      <Text style={styles.textTerms}>By signing up you agree with our Terms of Use</Text>
        <View style={styles.wrapperLogin}>
          <Text style={styles.textLogin}>Already a member? </Text>
          <TouchableOpacity onPress={loginHandler}>
              <Text style={styles.login}>Sign in</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingVertical: 30,
    paddingHorizontal: 30
  },
  wrapperHeader: {
    marginVertical: 30
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
  textTerms: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: COLOR.midnightBlue
  },
  wrapperLogin: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    // marginBottom: SIZE.height * 0.05,
  },
  textLogin: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLOR.grayBrown,
  },
  login: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue,
  }
})
