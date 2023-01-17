import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Category = ({ name, imgUrl }) => {
  return (
    <TouchableOpacity className='mr-2 relative'>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/mariuszkra85/image/upload/v1662935098/Salsa/background_cnwkfh.gif'
        }}
        className='w-20 h-20 p-2 '
      />
      <Text className='text-sm font-bold text-center'>{name}</Text>
    </TouchableOpacity>
  );
};

export default Category;
