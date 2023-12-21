import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import rating from '../../assets/rating.png';
import dotsThreeVertical from '../../assets/dots-three-vertical.png';

export default function ReviewCard({ image }) {
  return (
    <View className="flex flex-row gap-x-2 border-b border-b-[#CFD8DD] pb-4">
      <Image source={image} />
      <View className="flex-1">
        <View className="flex-row items-center justify-between flex-1">
          <Text className="text-lg text-black font-bold">UM Pharmacy</Text>
          <View className="flex flex-row items-center gap-x-1">
            <Text className="text-[10px] text-[#A7B0B5] ">4.0</Text>
            <Image source={rating} className="ml-auto" />
            <TouchableOpacity className="place-items-end">
              <Image source={dotsThreeVertical} />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="text-xs text-[#465C67] ">Open 24 hours</Text>
      </View>
    </View>
  );
}
