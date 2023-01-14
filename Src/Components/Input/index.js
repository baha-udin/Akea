import React, {useState} from 'react';
import {Text, View, Image, TextInput, Pressable} from 'react-native';
import styles from './styles';
import {EyeOff, EyeOn} from '../../Assets/icons';

const Input = ({label, placeholder, isPassword}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={isPassword && !isPasswordVisible}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              source={isPasswordVisible ? EyeOn : EyeOff}
              style={styles.icon}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default Input;
