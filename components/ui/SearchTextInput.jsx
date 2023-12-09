import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useFonts } from '../../contexts/FontsContext';
import inputSearch from '../../assets/input-search.png';

export default function SearchTextInput(props) {
  const { fontsLoaded } = useFonts();
  const fontFamilyR = fontsLoaded ? 'Raleway-Regular' : '';
  return (
    <View className="border border-[#CFD8DD] rounded-full flex-row items-center justify-between p-2">
      <TouchableOpacity onPress={() => console.log('first')}>
        <Image source={inputSearch} />
      </TouchableOpacity>
      <TextInput
        {...props}
        placeholderTextColor="#A7B0B5"
        style={{
          margin: 0,
          fontFamily: fontFamilyR,
          fontSize: 14,
          color: '#1C3146',
          flex: 0.95,
        }}
      />
    </View>
  );
}
