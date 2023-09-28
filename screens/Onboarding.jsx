import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useFonts } from '../contexts/FontsContext';
import OnboardingItem from '../components/OnboardingItem';
import OnboardingPagination, {
  OnboradingNextBottonText,
} from '../components/OnboardingPagination';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipText: {
    marginTop: 40,
    marginRight: 32,
    textAlign: 'right',
    color: '#2879FF',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 24,
  },
  swiperPagination: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 44,
  },
  swiperPaginationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginTop: 48,
  },
  swiperPaginationButtonText: {
    fontSize: 14,
    fontWeight: 800,
    color: '#1C3146',
  },
});
const onboardingItems = [
  {
    id: '1',
    source: require('../assets/onboarding-1.png'),
    title: 'Quick & easy ordering process',
    subTitle:
      ' Now you could order your medicine from nearest pharmacy from you that provide all your needs',
  },
  {
    id: '2',
    source: require('../assets/onboarding-2.png'),
    title: 'Instant support & replay',
    subTitle:
      'Pharmacy will receive your orders and able to replay to you once you place an order and ask for help',
  },
  {
    id: '3',
    source: require('../assets/onboarding-3.png'),
    title: 'Easy & multi solutions payment',
    subTitle: 'You can pay on cash or online using your common methods',
  },
  {
    id: '4',
    source: require('../assets/onboarding-4.png'),
    title: 'Order from nearest, and get it fastest',
    subTitle:
      'Search provide all nearest pharmacies that are near you, and your order will be to you in seconds',
  },
];

const {
  swiperPagination,
  skipText,
  swiperPaginationButton,
  swiperPaginationButtonText,
} = styles;

function Onboarding() {
  const swiperRef = useRef(null);
  const { fontsLoaded } = useFonts();
  const fontFamilyReg = fontsLoaded ? 'Raleway-Regular' : '';

  const [currentSelectedPagination, setCurrentSelectedPagination] = useState(0);

  function handleClickToNextSlide() {
    swiperRef.current?.snapToNext();
  }

  return (
    <View>
      <Text
        style={{
          ...skipText,
          fontFamily: fontFamilyReg,
        }}
        //   onPress={() => navigation.navigate('Pressed')}
      >
        Skip
      </Text>
      <Carousel
        ref={swiperRef}
        data={onboardingItems}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        sliderWidth={Dimensions.get('window').width}
        sliderHeight={Dimensions.get('window').height}
        itemWidth={Dimensions.get('window').width}
        itemHeight={Dimensions.get('window').height}
        onSnapToItem={(index) => setCurrentSelectedPagination(() => index)}
        firstItem={0}
      />

      <OnboardingPagination
        itemsLength={onboardingItems.length}
        activeDotIndex={currentSelectedPagination}
      />

      <OnboradingNextBottonText
        currentIndex={currentSelectedPagination}
        onClickNextPagination={handleClickToNextSlide}
      />
    </View>
  );
}

export default Onboarding;
