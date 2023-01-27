import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Category from './Category';

const Categories = ({ styles }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {styles.map((style, i) => {
        const { name, image, description, _id, teachers } = style;
        return (
          <Category
            key={i}
            name={name}
            imgUrl={image}
            description={description}
            teachers={teachers}
          />
        );
      })}
    </ScrollView>
  );
};

export default Categories;
