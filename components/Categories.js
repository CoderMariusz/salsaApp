import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Category from './Category';

const Categories = () => {
  const categories = ['salsa', 'bachata', 'rumba', 'cha-cha', 'salsa', 'salsa'];

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {categories.map((name, i) => (
        <Category
          key={i}
          name={name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
