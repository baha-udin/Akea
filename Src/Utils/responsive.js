import React from 'react';
import {View, Text, Dimensions} from 'react-native';

const baseWidth = 360;
const baseHeight = 640;

export const ResHeight = height => {
  return (Dimensions.get('window').height * height) / baseHeight;
};

export const ResWidth = width => {
  return (Dimensions.get('window').width * width) / baseWidth;
};
