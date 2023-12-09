import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useFonts } from '../../contexts/FontsContext';

export default function CVVTextInput(props) {
  const { fontsLoaded } = useFonts();
  const fontFamilyR = fontsLoaded ? 'Raleway-Regular' : '';
  return (
    <View className="">
      <Text
        style={{ fontFamily: fontFamilyR }}
        className="mb-2 text-sm font-normal text-[#465C67]"
      >
        CVV
      </Text>
      <View className="rounded-md p-2 bg-[#F6F7F9] flex-row items-center justify-between">
        <TextInput
          {...props}
          placeholder="---"
          placeholderTextColor="#A7B0B5"
          style={{
            margin: 0,
            fontFamily: fontFamilyR,
            fontSize: 12,
            lineHeight: 20,
            color: '#1C3146',
            flex: 0.95,
          }}
        />
      </View>
    </View>
  );
}
