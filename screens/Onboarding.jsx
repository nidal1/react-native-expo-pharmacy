import React, { useCallback, useRef, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
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

const renderItem = function ({ item }) {
  return <OnboardingItem item={item} />;
};

function Onboarding() {
  const swiperRef = useRef(null);
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const { fontsLoaded } = useFonts();
  const fontFamilyReg = fontsLoaded ? 'Raleway-Regular' : '';

  const [itemInViewId, setItemInViewId] = useState(null);
  const itemW = Dimensions.get('window').width;

  function handleClickToNextSlide() {
    if (itemInViewId < onboardingItems.length) {
      swiperRef.current?.scrollToOffset({
        offset: itemW * (itemInViewId * 1),
      });
    }
  }

  const onViewableItemsChanged = useCallback((info) => {
    const { viewableItems } = info;

    const [viewableItem] = viewableItems;

    if (viewableItem) {
      const { key } = viewableItem;

      setItemInViewId(key);
    } else {
      setItemInViewId(null);
    }
  }, []);

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
      <FlatList
        ref={swiperRef}
        data={onboardingItems}
        keyExtractor={(item) => item.id}
        horizontal
        snapToInterval={Dimensions.get('window').width}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        initialScrollIndex={0}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewableItemsChanged}
      />

      <OnboardingPagination
        itemsLength={onboardingItems.length}
        dotIndex={itemInViewId}
      />

      <OnboradingNextBottonText
        currentIndex={itemInViewId}
        onClickNextPagination={handleClickToNextSlide}
      />
    </View>
  );
}

export default Onboarding;
