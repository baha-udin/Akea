import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {IconCheck} from './../../Assets/icons';

const Checkbox = ({checked, onCheck}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onCheck(!checked)}
      style={styles.wrapCheck}>
      {checked ? <Image source={IconCheck} style={styles.iconCheck} /> : null}
    </TouchableOpacity>
  );
};

export default Checkbox;
