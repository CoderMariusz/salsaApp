import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import Card from './Card';

const FeatureRow = ({ id, title, description, featureCategory }) => {
  return (
    <View className=' px-4'>
      <View
        className='flex flex-row
        justify-between items-center px-4'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon
          size={25}
          color='#00CCBB'
        />
      </View>
      <Text className='text-sm text-slate-500'>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10
        }}
        showsHorizontalScrollIndicator={false}
        className='p-4'>
        {featureCategory.map((item, i) => (
          <Card
            key={i}
            name={item.name}
            rating={item.rating}
            address={item.address}
            teachers={item.teachers}
            description={item.description}
            urlImg={item.urlImg}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
