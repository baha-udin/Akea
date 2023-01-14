import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.3,
    color: Colors.black,
    textAlign: 'center',
    width: '80%',
  },
});
