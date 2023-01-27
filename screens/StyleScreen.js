import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ArrowDownRightIcon } from 'react-native-heroicons/outline';

const StyleScreen = () => {
  const route = useRoute();
  const { name, imgUrl, description } = route.params;
  return (
    <View>
      <Image
        source={{
          uri: imgUrl
        }}
        className='w-full h-48'
      />
      <View className='px-2 pt-3'>
        <Text className='font-bold text-3xl first-letter:capitalize mt-3'>
          {name}
        </Text>
        <Text className='text-lg text-slate-700 mt-3'>{description}</Text>
        <Pressable className='p-2 mt-2 bg-red-700 flex justify-center items-center w-36 rounded-lg text-slate-200'>
          <Text className='text-slate-200'>Our Teacher</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default StyleScreen;
