import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import sanityClient from '../sanity';

const ShopRow = () => {
  sanityClient
    .fetch(
      `*[_type == "shop"]{
     ...,
        "image":image.asset->url,
    }`
    )
    .then((data) => {
      console.log(data);
    });
  return (
    <ScrollView horizontal>
      <Text className='font-bold text-3xl first-letter:capitalize mt-3'>
        Shop
      </Text>
      <Text>This is our shop where you can buy alle our amazing stuff...</Text>
    </ScrollView>
  );
};

export default ShopRow;
