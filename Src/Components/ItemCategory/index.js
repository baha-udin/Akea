import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../../Utils/colors';

const ItemCategory = ({image, title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.wrapImage}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ItemCategory;

const styles = StyleSheet.create({
  container: {paddingRight: 4},
  wrapImage: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F8FD',
    borderRadius: 10,
  },
  image: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 15,
    fontWeight: '400',
    marginTop: 6,
    textAlign: 'center',
  },
});
