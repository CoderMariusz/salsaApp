import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const UserScreen = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'salsa',
      headerStyle: { backgroundColor: 'white' },
      headerTitleStyle: { color: 'black' },
      headerTintColor: 'white',
      headerShown: false
    });
  }, []);
  if (user) {
    return (
      <View>
        <Text>UserScreen</Text>
      </View>
    );
  }
  return (
    <SafeAreaView className='pt-7'>
      <Header />
      <View className='flex justify-center items-center h-full'>
        <Text className='text-2xl font-bold'>UserScreen</Text>
        <Text>
          You are not logged in. Please log in to see your user profile.
        </Text>
        <View className='p-3'>
          <TextInput
            placeholder='Email'
            placeholderTextColor='#446666'
            className='bg-slate-300 px-3 rounded-lg min-w-[200px] text-center text-lg'></TextInput>
          <TextInput
            placeholder='Password'
            placeholderTextColor='#446666'
            className='bg-slate-300 mt-3 px-3 rounded-lg min-w-[200px] text-center text-lg'></TextInput>
          <TouchableOpacity className='bg-red-600/80 items-center p-2 rounded-lg mt-4'>
            <Text className='text-lg font-semibold'>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserScreen;
