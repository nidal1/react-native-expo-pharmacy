/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { useFonts } from '../../contexts/FontsContext';

export default function Button(props) {
  const { fontsLoaded } = useFonts();
  const fontFamilyB = fontsLoaded ? 'Raleway-Bold' : '';

  let border = null;
  let background = 'bg-[#FEC107]';

  if (props.mode === 'outlined') {
    border = 'border border-[#1C3146]';
    background = 'bg-white';
  }

  return (
    <TouchableOpacity
      {...props}
      className={twMerge(
        `rounded-md ${border} ${background} gap-x-0.5 flex-row items-center justify-center p-4 m-0`,
        props.buttonClassName
      )}
      style={props.buttonStyle}
    >
      {props.withIcon ? (
        <Image source={props.customIcon} className="mr-1" />
      ) : null}
      <Text
        style={{ fontFamily: fontFamilyB, ...props.textStyle }}
        className={twMerge(
          'text-sm font-bold capitalize text-[#1C3146]',
          props.textClassName
        )}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}
