import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import sanityClient from '../sanity';
import ShopItem from '../components/ShopItem';
import BasketIcon from '../components/BasketIcon';
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
  return (
    <>
      <ScrollView>
        <Image
          source={{ uri: shop[0]?.image }}
          className='w-full h-48 object-cover'
        />
        <Text className='text-2xl first-letter:uppercase'>
          {shop[0]?.headline}
        </Text>
        <Text className='text-xl'>{shop[0]?.description}</Text>
        <View className='flex flex-wrap pb-28'>
          {items.map((item) => {
            return (
              <ShopItem
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
      <BasketIcon />
    </>
  );
};

export default ShopScreen;
