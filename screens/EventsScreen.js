import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Header from '../components/Header';
import sanityClient from '../sanity';

const EventsScreen = () => {
  const [events, setEvents] = useState([]);
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
    sanityClient
      .fetch(
        `*[_type == "event"]{...
    ,
      "image":image.asset->url
  }`
      )
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <View className='pt-8'>
      <Header />
      <ScrollView>
        <View className='p-2'>
          {events?.map((event, i) => {
            return (
              <View key={i}>
                <Image
                  source={{
                    uri: event.image
                  }}
                  className='h-48 w-48 rounded-md my-2'
                />
                <Text className='text-lg font-semibold'>{event.name}</Text>
                <Text className=''>{event.description}</Text>
                <Text className=''>{event.price}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default EventsScreen;
