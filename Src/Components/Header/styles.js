import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/colors';
import {ResWidth, ResHeight} from '../../Utils/responsive';

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
    width: ResWidth(24),
    height: ResHeight(24),
  },
  title: {
    fontSize: ResHeight(16),
    fontWeight: 'bold',
    letterSpacing: 0.3,
    color: Colors.black,
    textAlign: 'center',
    width: '80%',
  },
});
