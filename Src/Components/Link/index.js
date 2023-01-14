import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Link = ({label, CTA, onPress}) => {
  return (
    <View style={styles.wrapLink}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.cta}>{CTA}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Link;
