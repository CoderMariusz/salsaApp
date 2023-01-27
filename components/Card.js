import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
const Card = ({ id, urlImg, name, rating, address, teachers }) => {
  const img = urlFor(urlImg).url();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className='mr-2'
      onPressIn={() => {
        navigation.navigate('Offer', {
          id,
          name,
          rating,
          address,
          teachers,
          urlImg
        });
      }}>
      <Image
        source={{
          uri: img,
          cache: 'reload'
        }}
        className='w-36 h-36 rounded-md'
      />

      <Text className='text-lg font-semibold'>{name}</Text>
      <Text className='text-sm text-yellow-500'>{rating}</Text>
      <View className='flex flex-row items-center'>
        <MapPinIcon
          color='grey'
          opacity={0.4}
          size={20}
        />
        <Text className='text-sm text-slate-500'>
          {'  '}
          {address.City}
        </Text>
      </View>
      <Text className='text-sm text-slate-500/50'>
        {teachers.map((teacher, i) => (
          <Text key={i}>{teacher.name}</Text>
        ))}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;
