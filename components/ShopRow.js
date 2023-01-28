import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/outline';

const ShopRow = () => {
  const [shop, setShop] = React.useState([]);
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal
      className='m-2'>
      <View>
        <Text className='font-bold text-3xl first-letter:capitalize mt-3'>
          Shop
        </Text>
        <Text>
          This is our shop where you can buy alle our amazing stuff...
        </Text>
        <Image
          source={{
            uri: 'https://cdn.sanity.io/images/2f6r62q3/production/903d060abc1fba34270571d5166b648c33a5852c-1280x720.jpg'
          }}
          style={{ width: 300, height: 100 }}
        />
      </View>
      <TouchableOpacity
        className='pt-3 flex items-center justify-center'
        onPress={() => {
          navigation.navigate('Shop');
        }}>
        <ArrowRightIcon
          width={40}
          height={40}
          color='black'
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ShopRow;
