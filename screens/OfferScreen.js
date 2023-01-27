import { View, Text, Image } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { urlFor } from '../sanity';

const OfferScreen = () => {
  const route = useRoute();
  const { name, urlImg, description } = route.params;
  const img = urlFor(urlImg).url();
  return (
    <View>
      {urlImg && (
        <Image
          source={{
            uri: img
          }}
          className='w-full h-48'
        />
      )}
      <Text className='text-4xl font-extrabold pt-3'>{name}</Text>
      <Text className='text-lg text-slate-700'>{description}</Text>
    </View>
  );
};

export default OfferScreen;
