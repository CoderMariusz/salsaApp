import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowDownRightIcon } from 'react-native-heroicons/outline';
import sanityClient, { urlFor } from '../sanity';

const StyleScreen = () => {
  const route = useRoute();
  const { name, imgUrl, description, teachers } = route.params;
  const [teachersData, setTeachersData] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "style" && name == "${name}"]{teachers[]->}`)
      .then((res) => {
        setTeachersData(res);
      });
  }, []);
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
        <View className='flex flex-row gap-2 mt-3'>
          {teachers &&
            teachers.map((teacher, i) => (
              <TouchableOpacity
                key={i}
                className='flex flex-col gap-2'
                onPress={() => {
                  const img = urlFor(teachersData[0].teachers[i].image).url();
                  navigation.navigate('Teacher', {
                    id: teachersData[0].teachers[i]._id,
                    name: teachersData[0].teachers[i].name,
                    urlImg: img,
                    bio: teachersData[0].teachers[i].bio[0].children[0].text,
                    firstStyle: teachersData[0].teachers[i].firstStyle.name,
                    secondStyle: teachersData[0].teachers[i].secondStyle.name,
                    images: teachersData[0].teachers[i].images
                  });
                }}>
                <Image
                  source={{ uri: teacher.image }}
                  className='w-24 h-24 rounded-full'
                />
                <Text className='text-lg text-slate-700'>{teacher.name}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </View>
  );
};

export default StyleScreen;
