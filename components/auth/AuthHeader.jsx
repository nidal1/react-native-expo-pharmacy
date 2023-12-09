import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useFonts } from '../../contexts/FontsContext';
import Wrapper from '../ui/Wrapper';
import TriangleL from '../../assets/triangle-l.png';

export default function AuthHeader({ text }) {
  const { fontsLoaded } = useFonts();
  const { goBack } = useNavigation();
  const fontFamilyB = fontsLoaded ? 'Raleway-Bold' : '';
  return (
    <Wrapper>
      <View className="pt-14 flex-row items-center gap-1">
        <TouchableOpacity onPress={() => goBack()}>
          <Image source={TriangleL} alt="left arrow" />
        </TouchableOpacity>

        <Text
          style={{ fontFamily: fontFamilyB }}
          className="flex-1 text-center text-[#1C3146] text-3xl font-bold"
        >
          {text}
        </Text>
      </View>
    </Wrapper>
  );
}
