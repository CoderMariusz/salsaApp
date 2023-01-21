import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'salsa',
      headerStyle: { backgroundColor: 'white' },
      headerTitleStyle: { color: 'black' },
      headerTintColor: 'white',
      headerShown: false
    });
  }, [navigation]);

  const offers = [
    {
      id: 1,
      name: 'Salsa',
      description:
        'Salsa is a popular dance style that originated in Cuba in the 1950s. It is danced to salsa music, which is a fusion of Cuban son, guaracha, cha cha chá, mambo, and other styles. Salsa is danced to fast, upbeat music and is danced primarily in a social setting. Salsa is danced in a variety of styles, including Cuban-style salsa, New York-style salsa, and LA-style salsa.',
      teachers: 'Mariusz Krauze',
      rating: 4.5,
      address: 'Warsaw, Poland',
      urlImg:
        'https://res.cloudinary.com/mariuszkra85/image/upload/v1666652542/Salsa/45751f_30692c4973a7487da76e811525930e1a_mv2_mvp4c1.jpg'
    },
    {
      id: 2,
      name: 'Bachata',
      description:
        'Salsa is a popular dance style that originated in Cuba in the 1950s. It is danced to salsa music, which is a fusion of Cuban son, guaracha, cha cha chá, mambo, and other styles. Salsa is danced to fast, upbeat music and is danced primarily in a social setting. Salsa is danced in a variety of styles, including Cuban-style salsa, New York-style salsa, and LA-style salsa.',
      teachers: 'Mariusz Wazer',
      rating: 4,
      address: 'Warsaw, Poland',
      urlImg:
        'https://res.cloudinary.com/mariuszkra85/image/upload/v1666652542/Salsa/45751f_30692c4973a7487da76e811525930e1a_mv2_mvp4c1.jpg'
    }
  ];
  const discount = [
    {
      id: 1,
      name: 'Salsa',
      description: 'you will have discount for 2 lessons, 50% off,',
      teachers: 'Mariusz Krauze',
      urlImg:
        'https://res.cloudinary.com/mariuszkra85/image/upload/v1666652542/Salsa/45751f_30692c4973a7487da76e811525930e1a_mv2_mvp4c1.jpg'
    },
    {
      id: 2,
      name: 'Bachata',
      description: 'you will have discount for 2 lessons, 50% off,',
      teachers: 'Mariusz Wazer',
      urlImg:
        'https://res.cloudinary.com/mariuszkra85/image/upload/v1666652542/Salsa/45751f_30692c4973a7487da76e811525930e1a_mv2_mvp4c1.jpg'
    },
    {
      id: 3,
      name: 'Bachata',
      description: 'you will have discount for 2 lessons, 50% off,',
      teachers: 'Mariusz Wazer',
      urlImg:
        'https://res.cloudinary.com/mariuszkra85/image/upload/v1666652542/Salsa/45751f_30692c4973a7487da76e811525930e1a_mv2_mvp4c1.jpg'
    },
    {
      id: 4,
      name: 'Bachata',
      description: 'you will have discount for 2 lessons, 50% off,',
      teachers: 'Mariusz Wazer',
      urlImg:
        'https://res.cloudinary.com/mariuszkra85/image/upload/v1666652542/Salsa/45751f_30692c4973a7487da76e811525930e1a_mv2_mvp4c1.jpg'
    }
  ];

  return (
    <SafeAreaView className='pt-10'>
      <View className='flex flex-row gap-2 px-3'>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/mariuszkra85/image/upload/v1666652542/Salsa/45751f_30692c4973a7487da76e811525930e1a_mv2_mvp4c1.jpg'
          }}
          className='w-10 h-10 bg-red-800/90 p-4 rounded-full'
        />
        <View className='flex justify-center flex-1'>
          <Text className='text-md font-bold text-slate-500'>Our lesson!</Text>
          <Text className='text-2xl font-bold'>
            Salsa{' '}
            <ChevronDownIcon
              size={20}
              color='#00CCBB'
            />
          </Text>
        </View>

        <View className='flex justify-center pr-1'>
          <UserIcon
            size={30}
            color='#00CCBB'
          />
        </View>
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
      <ScrollView className='bg-slate-100 '>
        {/* Categories */}
        <Categories />
        {/* Offers */}
        <FeatureRow
          title='check our offers!'
          description='amazing offers for you! in our studio, with our teachers, in diferent styles'
          featureCategory={offers}
        />
        <FeatureRow
          title='Our discount for you!'
          description='discount for 2 lessons, 50% off,'
          featureCategory={discount}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
