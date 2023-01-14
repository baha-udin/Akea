import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../../../Utils/colors';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  image: {
    width: '100%',
    height: 210,
    resizeMode: 'contain',
  },
  titleContainer: {
    marginVertical: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.black,
  },
  innerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.orange,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  signIn: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default styles;
