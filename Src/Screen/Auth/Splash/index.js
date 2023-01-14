import React from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {SplashImage} from './../../../Assets/images';
import styles from './styles';
import Button from '../../../Components/Button';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={SplashImage} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You’ll Find</Text>
        <Text style={styles.innerTitle}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <Button title={'Sign Up'} />
      <Pressable hitSlop={20} onPress={console.log('button clicked also')}>
        <Text style={styles.signIn}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
