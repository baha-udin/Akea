import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import {FlashList} from '@shopify/flash-list';
import Header from '../../../Components/Header';
import Gap from './../../../Components/Gap';
import Category from '../../../Components/Category';

const Home = () => {
  return (
    <View>
      <Header title={'Find All You Need'} />
      <Gap height={24} />
      <Category />
    </View>
  );
};

export default Home;
