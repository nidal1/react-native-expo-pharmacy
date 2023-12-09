/* eslint-disable react/destructuring-assignment */
import {
  TouchableOpacity,
  Image,
  TextInput as NativeTextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useFonts } from '../../contexts/FontsContext';
import inputEye from '../../assets/input-eye.png';

export default function TextInput(props) {
  const { fontsLoaded } = useFonts();
  const [secureTextEntry, setSecureTextEntry] = useState(props.right);
  const fontFamilyR = fontsLoaded ? 'Raleway-Regular' : '';
  return (
    <View className="bg-white border border-[#CFD8DD] rounded-md flex-row items-center justify-between p-2 mb-3">
      <NativeTextInput
        {...props}
        placeholderTextColor="#A7B0B5"
        secureTextEntry={secureTextEntry}
        style={{
          margin: 0,
          fontFamily: fontFamilyR,
          fontSize: 14,
          color: '#1C3146',
          flex: 0.95,
        }}
      />
      {props.right ? (
        <TouchableOpacity onPress={() => setSecureTextEntry((prev) => !prev)}>
          <Image source={inputEye} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
