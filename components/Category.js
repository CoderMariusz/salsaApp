import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Category = ({ name, imgUrl, description, teachers }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className='mr-2 relative'
      onPress={() =>
        navigation.navigate('Style', {
          name,
          imgUrl,
          description,
          teachers
        })
      }>
      <Image
        source={{
          uri: imgUrl
        }}
        className='w-20 h-20 p-2 '
      />
      <Text className='text-sm font-bold text-center'>{name}</Text>
    </TouchableOpacity>
  );
};

export default Category;
