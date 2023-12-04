import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useFonts } from '../../contexts/FontsContext';
import OnboardingPaginationItem from './OnboardingPaginationItem';

const arrImage = require('../../assets/right-arr.png');

const styles = StyleSheet.create({
  swiperPagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 16,
  },
  swiperPaginationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  swiperPaginationButtonText: {
    fontSize: 14,
    fontWeight: 800,
    color: '#1C3146',
  },
});

const { swiperPagination, swiperPaginationButton, swiperPaginationButtonText } =
  styles;

export default function OnboardingPagination({ itemsLength, dotIndex }) {
  return (
    <View style={swiperPagination}>
      {Array.from({ length: itemsLength }).map((_, idx) => (
        <OnboardingPaginationItem
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          active={dotIndex !== null && dotIndex - 1 === idx}
        />
      ))}
    </View>
  );
}

export function OnboradingNextBottonText({
  currentIndex,
  onClickNextPagination,
}) {
  const { fontsLoaded } = useFonts();
  const fontFamilyReg = fontsLoaded ? 'Raleway-Regular' : '';

  return (
    <View style={swiperPaginationButton}>
      <Text
        style={{
          ...swiperPaginationButtonText,
          fontFamily: fontFamilyReg,
        }}
        onPress={onClickNextPagination}
      >
        {currentIndex < 4 ? 'Next' : 'Continue'}
      </Text>
      <Image source={arrImage} />
    </View>
  );
}
