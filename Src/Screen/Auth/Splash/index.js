import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {SplashImage} from './../../../Assets/images';
import styles from './styles';
import Button from '../../../Components/Button';
import Gap from './../../../Components/Gap';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  const onSignin = () => {
    navigation.navigate('Signin');
  };
  return (
    <View style={styles.container}>
      <Image source={SplashImage} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You’ll Find</Text>
        <Text style={styles.innerTitle}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <Button
        title={'Sign Up'}
        handlePress={() => navigation.navigate('Signup')}
      />
      <Gap height={30} />
      <Pressable onPress={onSignin} hitSlop={10}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
