import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity className='flex flex-row gap-02 mt-3 p-2 bg-red-700 rounded-lg w-48'>
          <Text className='text-lg text-slate-300'>Our Teacher</Text>
          <ArrowDownRightIcon
            width={20}
            height={20}
            color='#d2d2d2'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StyleScreen;
