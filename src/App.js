import React from 'react';
import { SplashBg } from './assets';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

const Promo = () => {
  return (
    <View>
      <Text>Promo Screen</Text>
    </View>
  )
}

const Splash = () => {
  return (
      <ImageBackground source={SplashBg} style={styles.container}>
        <View style={styles.overlay} />
      </ImageBackground>
  )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Promo" component={Promo} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(29, 35, 53, 0.37)', //'#1D2335'
  }
})
