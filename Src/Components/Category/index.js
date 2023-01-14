import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ItemCategory from '../ItemCategory';
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
        <ItemCategory image={IconStar} title={'Favourite'} />
        <ItemCategory image={IconBed} title={'Bed'} />
        <ItemCategory image={IconChair} title={'Chair'} />
        <ItemCategory image={IconSofa} title={'Sofa'} />
        <ItemCategory image={IconTable} title={'Table'} />
        <ItemCategory image={IconLamp} title={'Lamp'} />
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
