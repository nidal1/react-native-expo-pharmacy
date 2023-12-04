/* eslint-disable react/destructuring-assignment */
import { Button as PaperButton } from 'react-native-paper';
import React from 'react';
import { Text } from 'react-native';
import { useFonts } from '../../contexts/FontsContext';

export default function Button(props) {
  const { fontsLoaded } = useFonts();
  const fontFamilyB = fontsLoaded ? 'Raleway-Bold' : '';
  return (
    <PaperButton
      {...props}
      mode={props.mode || 'contained'}
      buttonColor="#FEC107"
      style={{ ...props.buttonStyle, borderRadius: 6 }}
    >
      <Text
        style={{ fontFamily: fontFamilyB }}
        className="text-sm font-bold capitalize text-[#1C3146]"
      >
        {props.children}
      </Text>
    </PaperButton>
  );
}
