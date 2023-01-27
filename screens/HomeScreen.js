import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ChevronDownIcon,
  UserIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';
import sanityClient from '../sanity';
import ShopRow from '../components/ShopRow';

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
  const [styles, setStyles] = useState([]);
  const [offers, setOffers] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "style"]{
      ...,
      "image":image.asset->url,
      teachers[]->{
        name,
        "image":image.asset-> url 
      }
    }`
      )
      .then((data) => {
        setStyles(data);
      });
    sanityClient
      .fetch(
        `*[_type == "offer"]{
    ...,
    mainImage[]->{
      asset->{
        _id,
        url
      }
    },
    'address':address->{
      City
    }
    }`
      )
      .then((data) => {
        setOffers(data);
      });
    sanityClient
      .fetch(
        `*[_type == "address"]{
        ...,
      }`
      )
      .then((data) => {
        setCities(data);
      });
    sanityClient
      .fetch(
        `*[_type == "teacher"]{
      ...,
      "image":image.asset->url,
      firstStyle->{
        name
      },
      secondStyle->{
        name
      },

      
    }`
      )
      .then((data) => {
        setTeachers(data);
      });
  }, []);

  return (
    <SafeAreaView className='pt-10 pb-24'>
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
        <Categories styles={styles} />
        {/* Rows */}
        <ShopRow />
        <FeatureRow
          title='check our offers!'
          description='amazing offers for you! in our studio, with our teachers, in diferent styles'
          data={offers}
          card='offer'
        />
        <FeatureRow
          title='Check our Teachers'
          description='we have one of the most experience staff...'
          data={teachers}
          card='teachers'
        />

        <FeatureRow
          title='City where we are'
          description='pop in to see us in...'
          data={cities}
          card='cities'
        />
        <FeatureRow
          title='You can buy some our amazing outfit'
          description='this is our shop'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
