import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MapPinIcon } from 'react-native-heroicons/outline';

const Card = ({ id, urlImg, name, rating, address, teachers }) => {
  return (
    <TouchableOpacity
      className='mr-2'
      onPressIn={() => {}}>
      <Image
        source={{ uri: urlImg, cache: 'reload' }}
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
          {address}
        </Text>
      </View>
      <Text className='text-sm text-slate-500/50'>{teachers}</Text>
    </TouchableOpacity>
  );
};

export default Card;
