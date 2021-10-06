import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, Onboarding, Order, Reward, Register, Splash } from '../screens';
import BottomNavigation from '../components/BottomNavigation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigation {...props} /> }
      // screenOptions={{ 
      //   tabBarShowLabel: false,
      //   tabBarStyle: {
      //     position: 'absolute',
      //     bottom: 20,
      //     left: 30,
      //     right: 30,
      //     elevation: 0,
      //     backgroundColor: COLOR.white,
      //     borderRadius: 20,
      //     height: 90,
      //     shadowColor: "#000",
      //     shadowOffset: {
      //       width: 0,
      //       height: 5,
      //     },
      //     shadowOpacity: 0.34,
      //     shadowRadius: 6.27,
      //     elevation: 10
      //   }
      // }}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Reward" component={Reward} options={{headerShown: false}} />
      <Tab.Screen name="Order" component={Order} options={{headerShown: false}} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
      <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Router