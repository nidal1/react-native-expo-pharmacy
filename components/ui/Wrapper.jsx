import { Dimensions, View } from 'react-native';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Wrapper({ className, children }) {
  return (
    <View
      style={{ width: Dimensions.get('screen').width }}
      className={twMerge('flex flex-1 px-10 flex-col', className)}
    >
      {children}
    </View>
  );
}
