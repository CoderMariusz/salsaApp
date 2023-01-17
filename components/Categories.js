import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Category from './Category';

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10
      }}>
      <Category name='salsa' />
      <Category name='bachata' />
      <Category name='rumba' />
      <Category name='cha-cha' />
      <Category name='salsa' />
      <Category name='salsa' />
    </ScrollView>
  );
};

export default Categories;
