import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './styles';

const Link = ({label, CTA}) => {
  return (
    <View style={styles.wrapLink}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.cta}>{CTA}</Text>
    </View>
  );
};

export default Link;
