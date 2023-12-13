import React from 'react';
import { View } from 'react-native';
import Wrapper from '../components/ui/Wrapper';
import { MainHeaderProvider } from '../contexts/MainHeaderContext';

export default function MainLayout({ children }) {
  return (
    <View className="flex flex-1 pt-16 bg-[#FBFCFE]">
      <Wrapper>
        <MainHeaderProvider>{children}</MainHeaderProvider>
      </Wrapper>
    </View>
  );
}
