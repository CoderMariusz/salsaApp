import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import Card from './Card';
import TeacherCard from './TeacherCard';
import CityCard from './CityCard';

const FeatureRow = ({ id, title, description, data, card }) => {
  return (
    <View className=' px-4'>
      <View
        className='flex flex-row
        justify-between items-center px-1'>
        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon
          size={25}
          color='#00CCBB'
        />
      </View>
      <Text className='text-sm text-slate-500'>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10
        }}
        showsHorizontalScrollIndicator={false}
        className='p-4'>
        {card === 'offer' &&
          data.map((item, i) => {
            return (
              <Card
                key={i}
                name={item.name}
                rating={item.rating}
                address={item.address}
                teachers={item.teachers}
                description={item.description}
                urlImg={item.mainImage.asset._ref}
              />
            );
          })}
        {card === 'teachers' &&
          data.map((item, i) => {
            const { name, image, bio, firstStyle, secondStyle, _id, images } =
              item;
            return (
              <TeacherCard
                key={_id}
                id={_id}
                name={name}
                firstStyle={firstStyle.name}
                secondStyle={secondStyle.name}
                bio={bio[0].children[0].text}
                urlImg={image}
                images={images}
              />
            );
          })}
        {card === 'cities' &&
          data.map((item, i) => {
            const { City, img, street, postCode, _id } = item;
            return (
              <CityCard
                key={_id}
                id={_id}
                name={City}
                imgRef={img.asset._ref}
                street={street}
                postCode={postCode}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
