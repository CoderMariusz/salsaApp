import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { urlFor } from '../sanity';

const CityCard = ({ name, postCode, street, imgRef }) => {
  const img = urlFor(imgRef).url();
  const latitude = '40.7127753';
  const longitude = '-74.0059728';
  const label = 'New York, NY, USA';

  const url = Platform.select({
    ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
    android: 'geo:' + latitude + ',' + longitude + '?q=' + label
  });

  return (
    <TouchableOpacity
      className='mr-2'
      onPress={() => Linking.openURL(url)}>
      <Image
        source={{
          uri: img,
          cache: 'reload'
        }}
        className='w-32 h-32 rounded-lg'
      />
      <Text>{name}</Text>
      <Text>{postCode}</Text>
      <Text>{street}</Text>
    </TouchableOpacity>
  );
};

export default CityCard;
