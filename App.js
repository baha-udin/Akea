import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Splash from './Src/Screen/Auth/Splash';
import Signup from './Src/Screen/Auth/Signup';
import Signin from './Src/Screen/Auth/Signin';
import Home from './Src/Screen/App/Home';

const App = () => {
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
