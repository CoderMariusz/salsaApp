import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';

const TeacherScreen = () => {
  const route = useRoute();
  const { id, name, urlImg, bio, firstStyle, secondStyle, images } =
    route.params;
  console.log(route.params);
  return (
    <View>
      <Image
        source={{ uri: urlImg }}
        className='w-full h-56'
      />
      <View className='px-1 pt-3'>
        <Text className='text-4xl font-bold'>{name}</Text>
        <View className='flex flex-row gap-2 mb-4'>
          <Text className='text-lg text-slate-500'>{firstStyle}</Text>
          <Text className='text-lg text-slate-500'>{secondStyle}</Text>
        </View>
        <Text className='text-lg text-slate-700'>{bio}</Text>
        <Text className='text-xl text-slate-800 font-semibold'>
          He is couple of my pic:
        </Text>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
          }}>
          {images &&
            images.map((image, i) => {
              const img = urlFor(image.asset._ref).url();
              return (
                <Image
                  key={i}
                  source={{ uri: img }}
                  className='w-48 h-64  rounded-lg mr-2'
                />
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

export default TeacherScreen;
