import { View, Text, Image } from 'react-native';
import React from 'react';
import storeFrontDMD from '../../assets/storefront-d-md.png';
import Button from '../ui/Button';
import { useFonts } from '../../contexts/FontsContext';

export default function FindNewPharmacy() {
  const { fontsLoaded } = useFonts();
  const fontFamilyB = fontsLoaded ? 'Raleway-Bold' : '';
  const fontFamilyR = fontsLoaded ? 'Raleway-Regular' : '';
  return (
    <View className="px-2">
      <View
        style={{
          shadowColor: '#2A62FF',
          shadowOffset: {
            width: -1,
            height: 4,
          },
          shadowOpacity: 0.08,
          shadowRadius: 6,

          elevation: 5,
        }}
        className="flex flex-row w-full justify-between items-center bg-white px-[10px] py-5 mt-4 rounded-md"
      >
        <View className="flex flex-row gap-x-2 items-center">
          <Image source={storeFrontDMD} className="w-10 h-10 object-contain" />
          <View>
            <Text
              style={{ fontFamily: fontFamilyB }}
              className="text-sm font-bold text-[#1C3146]"
            >
              Find new pharmacies
            </Text>
            <Text
              style={{ fontFamily: fontFamilyR }}
              className="text-sm text-[#A7B0B5]"
            >
              Easily browse on map
            </Text>
          </View>
        </View>
        <Button>Open map</Button>
      </View>
    </View>
  );
}
