import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {
  MinusCircleIcon,
  PlusCircleIcon
} from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBasket,
  removeToBasket,
  selectBasketById
} from '../features/basketSlice';

const ShopItem = ({ name, price, image, description, id }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketById(state, id));
  const dispatch = useDispatch();

  const handleAddToBasket = () => {
    console.log('Add to basket');
    dispatch(addToBasket({ id, name, price, image, id }));
  };
  const handleRemoveFromBasket = () => {
    console.log('Remove from basket');
    if (!items.length > 0) {
      return;
    }
    dispatch(removeToBasket({ id, name, price, image, id }));
  };
  return (
    <>
      <TouchableOpacity
        className={`w-full flex justify-center items-center p-3 transition-all duration-300 ${
          isPressed && 'border-b-2 border-gray-400 mb-2'
        }`}
        onPress={() => {
          setIsPressed(!isPressed);
        }}>
        <Image
          source={{ uri: image }}
          className='w-full h-96 object-cover rounded-xl'
        />
        <View className='flex flex-row'>
          <View className='flex'>
            <Text className='text-2xl font-bold uppercase'>{name}</Text>
            <Text className='text-lg max-w-[120%]'>{description}</Text>
          </View>
          <Text className='text-xl font-bold text-right flex-1'>£{price}</Text>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className='flex flex-row'>
          <View className='flex w-40 gap-2 pl-2'>
            <TouchableOpacity
              className='ml-2 p-1 bg-red-600/90  rounded-lg flex flex-row flex-nowrap gap-x-2 justify-center items-center'
              onPress={() => {
                handleAddToBasket();
              }}>
              <Text className='text-lg text-slate-100 font-semibold'>Add</Text>
              <PlusCircleIcon
                size={30}
                color='white'
              />
            </TouchableOpacity>
            <TouchableOpacity
              disabled={items.length > 0 ? false : true}
              className={`ml-2 p-1 ${
                items.length > 0 ? 'bg-red-600/90' : 'bg-slate-500'
              }  rounded-lg flex flex-row flex-nowrap gap-x-2 justify-center items-center`}
              onPress={() => {
                handleRemoveFromBasket();
              }}>
              <Text className='text-lg text-slate-100 font-semibold'>
                Remove
              </Text>
              <MinusCircleIcon
                size={30}
                color='white'
              />
            </TouchableOpacity>
          </View>
          <Text className='flex-1 text-right pr-2 text-xl'>
            Quantity: {items.length}
          </Text>
        </View>
      )}
    </>
  );
};

export default ShopItem;
