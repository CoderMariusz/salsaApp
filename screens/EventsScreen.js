import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Header from '../components/Header';
import sanityClient from '../sanity';

const EventsScreen = () => {
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

  useEffect(() => {
    // Fetch all events from Sanity
    sanityClient.fetch(`*[_type == "event"]{...}`).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <View className='pt-8'>
      <Header />
      <ScrollView>
        <View>
          <Text>Events Screen</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default EventsScreen;
