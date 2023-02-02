import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectBasket, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

const BasketIcon = () => {
  const items = useSelector(selectBasket);
  const navigation = useNavigation();
  const total = useSelector(selectBasketTotal);
  console.log(items.length);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Basket');
      }}
      className={`w-full

    flex items-center justify-center absolute bottom-2 h-18 z-50 transition-all duration-200 ${
      items.length > 0 ? 'opacity-100' : 'opacity-0'
    }`}>
      <View className='w-[80%] flex flex-row bg-red-500 p-4 justify-between       rounded-lg'>
        <Text className='text-2xl font-bold'>{items.length}</Text>
        <Text className='text-2xl font-bold'>
          {items.length !== 1 ? 'Items' : 'Item'}
        </Text>
        <Text className='text-2xl font-bold text-slate-200'>
          £{total.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BasketIcon;
