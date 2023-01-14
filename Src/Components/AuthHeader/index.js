import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';
import styles from './styles';
import {IconAuthBack} from './../../Assets/icons';

const AuthHeader = ({onBackPress, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <Image source={IconAuthBack} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
