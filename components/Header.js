import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon
} from 'react-native-heroicons/outline';

const Header = () => {
  const [ifOpen, setIfOpen] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <View className='flex flex-row gap-2 px-3'>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/mariuszkra85/image/upload/v1666652542/Salsa/45751f_30692c4973a7487da76e811525930e1a_mv2_mvp4c1.jpg'
          }}
          className='w-10 h-10 bg-red-800/90 p-4 rounded-full'
        />

        <TouchableOpacity
          className='flex justify-center flex-1'
          onPress={() => {
            setIfOpen(!ifOpen);
            console.log(ifOpen);
          }}>
          <Text className='text-md font-bold text-slate-500'>Our lesson!</Text>
          <Text className='text-2xl font-bold'>
            Salsa{' '}
            <ChevronDownIcon
              size={20}
              color='#00CCBB'
            />
          </Text>
        </TouchableOpacity>

        <View className='flex justify-center pr-1'>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('User');
            }}>
            <UserIcon
              size={30}
              color='#00CCBB'
            />
          </TouchableOpacity>
        </View>
        {ifOpen ? (
          <View className='flex flex-col z-50 absolute w-full py-5 bg-slate-50'>
            <View className='flex flex-row justify-end px-3'>
              <TouchableOpacity
                onPress={() => {
                  setIfOpen(!ifOpen);
                  console.log(ifOpen);
                }}
                className='flex justify-center items-center w-10 h-10 bg-slate-400/20 rounded-full'>
                <Text className='text-2xl font-bold text-slate-800'>X</Text>
              </TouchableOpacity>
            </View>
            <View className='w-full gap-2 items-center'>
              <Text className='text-lg font-bold text-slate-500'>
                Menu is open
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Text className='text-lg font-bold text-slate-500'>Home</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Teacher');
                }}>
                <Text className='text-lg font-bold text-slate-500'>
                  Teacher
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Classes');
                }}>
                <Text className='text-lg font-bold text-slate-500'>
                  Classes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Events');
                }}>
                <Text className='text-lg font-bold text-slate-500'>Events</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View></View>
        )}
      </View>
      {/* Search */}
      <View className='flex flex-row gap-2 px-2 pt-3'>
        <View className=' flex item-center flex-row p-1 bg-slate-400/20 flex-1 rounded-md'>
          <MagnifyingGlassIcon
            size={24}
            color='#00AA99'
          />
          <TextInput
            className='text-xl px-1 font-bold text-slate-600/90'
            placeholder='Find your next class'
            placeholderTextColor={'009988'}
            keyboardType='default'
          />
        </View>
        <AdjustmentsHorizontalIcon
          size={25}
          color='#00AA99'
        />
      </View>
    </>
  );
};
export default Header;
