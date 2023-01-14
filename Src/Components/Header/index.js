import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {IconSearch} from './../../Assets/icons';

const Header = ({title}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={IconSearch} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
