import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Colors} from '../../Utils/colors';

const Button = ({title, Icon, isImage, isText, color}) => {
  const handlePress = () => {
    console.log('Button clicked');
  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container(color)}
      onPress={handlePress}>
      {isText ? <Text style={styles.title}>{title}</Text> : null}

      {isImage ? <Image source={Icon} style={styles.icon} /> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.white,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Button;
