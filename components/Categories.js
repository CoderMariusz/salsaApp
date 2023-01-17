import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Category from './Category';

const Categories = () => {
  const categories = ['salsa', 'bachata', 'rumba', 'cha-cha', 'salsa', 'salsa'];

  const renderCategories = () => {
    return categories.map((name) => {
      return <Category name={name} />;
    });
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {renderCategories()}
    </ScrollView>
  );
};

export default Categories;
