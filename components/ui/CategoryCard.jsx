import { View, Text } from 'react-native';
import React from 'react';

export default function CategoryCard({ style, text }) {
  return (
    <View
      style={[
        {
          backgroundColor: 'rgb(234 88 12 / 1)',
        },
        style,
      ]}
      className="h-[115px] max-w-[150px] w-full items-center justify-center rounded-md m-1 p-2"
    >
      <Text className="text-sm text-white font-bold ">{text}</Text>
    </View>
  );
}
