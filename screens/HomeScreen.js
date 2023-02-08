import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
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
import Header from '../components/Header';

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
    // Fetch all styles from Sanity
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
    // Fetch all offers from Sanity
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
    // Fetch all cities from Sanity
    sanityClient
      .fetch(
        `*[_type == "address"]{
        ...,
      }`
      )
      .then((data) => {
        setCities(data);
      });
    // Fetch all teachers from Sanity
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
      <Header />
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
