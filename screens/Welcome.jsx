import { View, Text, Image } from 'react-native';
import React from 'react';
import Wrapper from '../components/ui/Wrapper';
import { useFonts } from '../contexts/FontsContext';

import welcome from '../assets/welcome.png';
import Button from '../components/ui/Button';

export default function Welcome({ navigation }) {
  const { fontsLoaded } = useFonts();
  const fontFamilyB = fontsLoaded ? 'Raleway-Bold' : '';
  const fontFamilyR = fontsLoaded ? 'Raleway-Regular' : '';
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Wrapper>
        <Text
          style={{ fontFamily: fontFamilyB }}
          className="text-[28px] leading-normal font-extrabold tracking-[-0.84px] text-center"
        >
          Welcome to Taibah Pharmacies Network
        </Text>
      </Wrapper>

      <Image source={welcome} alt="welcome image" />

      <Wrapper>
        <View className="flex-col gap-4 mt-[72px]">
          <Button
            mode="contained"
            onPress={() => navigation.navigate('signin')}
            buttonStyle={{ marginBottom: 16 }}
          >
            Sign in
          </Button>

          <Button
            mode="contained"
            onPress={() => navigation.navigate('signup')}
          >
            Sign up
          </Button>
        </View>
      </Wrapper>

      <Text
        style={{ fontFamily: fontFamilyR }}
        className="mt-16 text-[#2879FF] text-sm font-normal leading-6 "
      >
        Skip for now
      </Text>
    </View>
  );
}
