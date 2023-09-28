import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Pagination } from 'react-native-snap-carousel';
import { useFonts } from '../contexts/FontsContext';

const arrImage = require('../assets/right-arr.png');

const styles = StyleSheet.create({
  swiperPagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swiperPaginationItem: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: '#CFD8DD',
    marginHorizontal: 0,
  },
  swiperPaginationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  swiperPaginationActiveButton: {
    width: 12,
    height: 4,
    borderRadius: 12,
    backgroundColor: '#FEC107',
  },
  swiperPaginationButtonText: {
    fontSize: 14,
    fontWeight: 800,
    color: '#1C3146',
  },
});

const {
  swiperPagination,
  swiperPaginationButton,
  swiperPaginationButtonText,
  swiperPaginationItem,
  swiperPaginationActiveButton,
} = styles;

export default function OnboardingPagination({ itemsLength, activeDotIndex }) {
  return (
    <Pagination
      dotsLength={itemsLength}
      activeDotIndex={activeDotIndex}
      containerStyle={swiperPagination}
      dotStyle={swiperPaginationActiveButton}
      inactiveDotStyle={swiperPaginationItem}
      inactiveDotOpacity={1}
      inactiveDotScale={1}
    />
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
        {currentIndex < 3 ? 'Next' : 'Continue'}
      </Text>
      <Image source={arrImage} />
    </View>
  );
}
