import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBasket, selectBasketTotal } from '../features/basketSlice';

const BasketScreen = () => {
  const items = useSelector(selectBasket);
  const total = useSelector(selectBasketTotal);
  const [groupedItems, setGroupedItems] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItems(groupedItems);
  }, [items]);

  console.log(groupedItems);

  if (groupedItems.length === 0) {
    return null;
  }

  return (
    <>
      <View className=''>
        <Text className='text-2xl font-bold'>Your Basket:</Text>
        <ScrollView>
          {Object.entries(groupedItems).map(([key, items]) => (
            <View
              key={key}
              className='flex flex-row justify-between items-center mb-3 bg-slate-50 p-3'>
              <View className='flex flex-row gap-2 items-center'>
                <Text>{items.length} x</Text>
                <Image
                  source={{ uri: items[0].image }}
                  className='w-14 h-14'
                />
                <Text>{items[0].name}</Text>
              </View>
              <Text>£{items[0].price * items.length}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View className='absolute bottom-0 p-2 border-t-2 gap-y-1 border-t-zinc-300 border-solid w-full flex items-center'>
        <View className='flex flex-row justify-between w-full p-2'>
          <Text>Price:</Text>
          <Text>{(total * 0.8).toFixed(2)}</Text>
        </View>
        <View className='flex flex-row justify-between w-full p-2'>
          <Text>20% Vat:</Text>
          <Text>{(total * 0.2).toFixed(2)}</Text>
        </View>
        <View className='flex flex-row justify-between w-full p-2'>
          <Text className='text-lg font-bold'>Total: </Text>

          <Text className='text-lg font-bold'>£{total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity className='p-3 bg-blue-500/80 rounded-lg mt-2 mr-2 w-[80%] flex justify-center items-center'>
          <Text className='text-lg font-bold'>Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BasketScreen;
