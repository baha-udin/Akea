import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Signin, Signup, Splash} from './../Screen/Auth';
import {Home, Profile, Favourites} from './../Screen/App';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  IconHomeActive,
  IconHomeInActive,
  IconWishListActive,
  IconWishListInActive,
  IconProfileActive,
  IconProfileInActive,
} from './../Assets/icons';
import {Colors} from '../Utils/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favourites" component={Favourites} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  iconMenu: {
    width: 24,
    height: 24,
  },
});
