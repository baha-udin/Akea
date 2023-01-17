import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import {FlashList} from '@shopify/flash-list';
import Header from '../../../Components/Header';
import Gap from './../../../Components/Gap';
import CategoryBox from '../../../Components/CategoryBox';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(false);
  const renderCategoryItem = ({item, index}) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };
  return (
    <View>
      <Header title={'Find All You Need'} />
      <Gap height={24} />
      {/* <FlashList
        data={CategoriesData}
        renderItem={renderCategoryItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        estimatedItemSize={200}
        contentContainerStyle={styles.list}
      /> */}
    </View>
  );
};

export default Home;
