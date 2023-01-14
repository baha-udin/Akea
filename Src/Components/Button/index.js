import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import styles from './styles';
import {Colors} from '../../Utils/colors';
import {ResWidth, ResHeight} from '../../Utils/responsive';

const Button = ({title, icon, text, style, handlePress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, style]}
      onPress={handlePress}>
      {icon ? (
        <Image source={icon} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
