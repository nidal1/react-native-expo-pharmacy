/* eslint-disable react/destructuring-assignment */
import { View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts } from '../../contexts/FontsContext';
import inputSearch from '../../assets/input-search.png';

export default function FlatTextInput(props) {
  const { fontsLoaded } = useFonts();
  const fontFamilyR = fontsLoaded ? 'Raleway-Regular' : '';
  return (
    <View className="border-b border-[#CFD8DD] rounded-md flex-row items-center justify-between p-2">
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
      {props.right ? (
        <TouchableOpacity onPress={() => console.log('first')}>
          <Image source={inputSearch} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
