import React, { useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconArrowLeft } from '../../assets'
import { Button, TextField, PasswordField } from '../../components'
import { COLOR, SIZE } from '../../utils'

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [users, setUsers] = React.useState([{}]);
  const ref = firestore().collection('users');

  useEffect(() => {
    fetchUsers();
  }, [])

  const clickBackHandler = () => {
    navigation.replace('Onboarding')
  }

  const fetchUsers = async () => {
    const query = await ref.get();
    let list = [];
    query.forEach(async item => {
      const { email, name, phone , password} = item.data()
      list.push({
        email,
        name,
        phone,
        password
      })
    });
    setUsers(list);
  }

  const loginHandler = () => {
    let findEmail = users.find(data => data.email === email);
    if (!findEmail) {
      return Alert.alert('error', 'email tidak terdaftar')
    }

    let findPassword = users.find(data => data.password === password);
    if (!findPassword) {
      return Alert.alert('error', 'password salah')
    }

    return Alert.alert('success', 'silahkan tunggu', [
      {
        text: 'OK',
        onPress: () => navigation.replace('Tabs', { screen: 'Home' })
      }
    ])
  }

  const registerHandler = () => {
    navigation.navigate('Register')
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={clickBackHandler}>
        <IconArrowLeft />
      </TouchableOpacity>
      <View style={styles.wrapperHeader}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.message}>Welcome back</Text>
      </View>
      <View style={styles.wrapperInput}>
        <TextField
          iconName="message"
          placeholder="Email address"
          value={email} 
          onChangeText={email => setEmail(email)}
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
        text="Login"
        onPress={loginHandler}
      />
      <TouchableOpacity>
        <Text style={styles.textForgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.wrapperRegister}>
        <Text style={styles.textRegister}>New member? </Text>
        <TouchableOpacity onPress={registerHandler}>
          <Text style={styles.register}>Sign up</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 30
  },
  wrapperHeader: {
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
  textForgot: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue,
    textDecorationLine: 'underline'
  },
  wrapperRegister: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: SIZE.height * 0.05,
  },
  textRegister: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLOR.grayBrown,
  },
  register: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: COLOR.midnightBlue,
  }
})
