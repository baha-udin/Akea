import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import CategoryBox from './../CategoryBox';
import {
  IconStar,
  IconBed,
  IconChair,
  IconSofa,
  IconTable,
  IconLamp,
} from '../../Assets/icons';
import Gap from '../Gap';
import {Colors} from '../../Utils/colors';

const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category</Text>
      <Gap height={16} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.wrapCategory}>
        <CategoryBox image={IconStar} title={'Favourite'} />
        <CategoryBox image={IconBed} title={'Bed'} />
        <CategoryBox image={IconChair} title={'Chair'} />
        <CategoryBox image={IconSofa} title={'Sofa'} />
        <CategoryBox image={IconTable} title={'Table'} />
        <CategoryBox image={IconLamp} title={'Lamp'} />
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.black,
    paddingHorizontal: 24,
  },
  wrapCategory: {
    paddingHorizontal: 24,
  },
});
