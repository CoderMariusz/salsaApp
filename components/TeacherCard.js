import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const TeacherCard = ({
  name,
  urlImg,
  bio,
  firstStyle,
  secondStyle,
  id,
  images
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className='mr-2  max-w-[200px] '
      onPress={() => {
        navigation.navigate('Teacher', {
          id,
          name,
          urlImg,
          bio,
          firstStyle,
          secondStyle,
          images
        });
      }}>
      <Image
        source={{
          uri: urlImg,
          cache: 'reload'
        }}
        className='w-48 h-48 rounded-lg'
      />
      <Text>{name}</Text>
      <Text>{firstStyle}</Text>
      <Text>{secondStyle}</Text>
      <Text>{bio}</Text>
    </TouchableOpacity>
  );
};

export default TeacherCard;
