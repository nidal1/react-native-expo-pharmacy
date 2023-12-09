import { View, Text } from 'react-native';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useFonts } from '../../contexts/FontsContext';

export default function Separator({ text, className }) {
  const { fontsLoaded } = useFonts();
  const fontFamilyR = fontsLoaded ? 'Raleway-Regular' : '';
  return (
    <View className="my-10 relative">
      <View className="h-[1px] bg-[#EAF2FE]" />
      <Text
        className={twMerge(
          '-mt-[12px] mx-auto px-3 max-w-[200px] max-h-6 bg-white font-normal text-sm text-[#465C67]',
          className
        )}
        style={{ fontFamily: fontFamilyR }}
      >
        {text}
      </Text>
    </View>
  );
}
