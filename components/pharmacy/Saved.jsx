import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { useFonts } from '../../contexts/FontsContext';
import FindNewPharmacy from './FindNewPharmacy';
import SavedPharmacyCard from './SavedPharmacyCard';
import savedPharmacy1 from '../../assets/saved-pharmacy-1.png';
import savedPharmacy2 from '../../assets/saved-pharmacy-2.png';
import savedPharmacy3 from '../../assets/saved-pharmacy-3.png';

const data = [
  {
    id: 1,
    image: savedPharmacy1,
  },
  {
    id: 2,
    image: savedPharmacy2,
  },
  {
    id: 3,
    image: savedPharmacy3,
  },
];

export default function Saved() {
  const { fontsLoaded } = useFonts();
  const fontFamilyB = fontsLoaded ? 'Raleway-Bold' : '';
  return (
    <View className="flex flex-1 bg-[#FBFCFE]">
      <FindNewPharmacy />

      <Text
        style={{ fontFamily: fontFamilyB }}
        className="text-base font-bold text-[#081C34] mt-6 px-2"
      >
        Saved pharmacies
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <SavedPharmacyCard pharmacyImage={item.image} />
        )}
        keyExtractor={({ id }) => id}
      />
    </View>
  );
}
