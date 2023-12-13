import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Card({ image, text }) {
  return (
    <View className="max-w-[108px] w-full p-[10px] flex gap-y-1 bg-white rounded-md shadow-lg shadow-[#2a62ff14]">
      <Image source={image} className="self-end" />
      <Text className="text-sm text-[#081C34] font-normal">{text}</Text>
    </View>
  );
}
