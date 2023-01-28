import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import sanityClient from '../sanity';
const ShopScreen = () => {
  const [shop, setShop] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "item"]{
      ...,
      "image": image.asset->url
        }
      `
      )
      .then((data) => {
        setItems(data);
      });
    sanityClient
      .fetch(
        `*[_type == "shop"]{
    ...,
    "image": mainImage.asset->url
    }`
      )
      .then((data) => {
        setShop(data);
      });
  }, []);

  console.log(shop[0]?.image);

  return (
    <ScrollView>
      <Image
        source={{ uri: shop[0]?.image }}
        className='w-full h-48 object-cover'
      />
      <Text>{shop[0]?.headline}</Text>
      <Text>{shop[0]?.description}</Text>
      <View className='flex flex-wrap'>
        {items.map((item) => {
          console.log('item', item);
          return (
            <View className='w-1/2'>
              <Image
                source={{ uri: item.image }}
                className='w-full h-48 object-cover'
              />
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ShopScreen;
