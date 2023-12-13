import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import MainLayout from '../layout/MainLayout';
import { useFonts } from '../contexts/FontsContext';
import Card from '../components/main/Card';
import pill from '../assets/pill.png';
import image from '../assets/image.png';
import userfocus from '../assets/userfocus.png';
import Button from '../components/ui/Button';
import shield from '../assets/shield-icon.png';
import CategoryCard from '../components/ui/CategoryCard';

const cards = [
  {
    image: pill,
    text: 'Claim or prescription',
  },
  {
    image,
    text: 'Product picture',
  },
  {
    image: userfocus,
    text: 'Pharmacist assistant',
  },
];

function Home() {
  const { fontsLoaded } = useFonts();
  const fontFamilyEB = fontsLoaded ? 'Raleway-ExtraBold' : '';
  const fontFamilyB = fontsLoaded ? 'Raleway-Bold' : '';
  const fontFamilyR = fontsLoaded ? 'Raleway-Regular' : '';
  return (
    <MainLayout>
      <Text
        style={{ fontFamily: fontFamilyEB }}
        className="font-extrabold text-[28px] text-[#1C3146] tracking-[-0.84px] text-center mb-24"
      >
        Place your order select pharmacy receive it
      </Text>

      <View className="flex flex-row w-full justify-between items-center mb-6">
        {cards.map((card) => (
          <Card {...card} key={card.text} />
        ))}
      </View>

      <View className="flex flex-row justify-between items-center bg-white py-[10px] px-1 rounded-md shadow-[#2a62ff14] shadow-2xl mb-6">
        <Image source={shield} />
        <View className="px-1">
          <Text
            style={{ fontFamily: fontFamilyB }}
            className="text-sm text-[#1C3146] font-bold"
          >
            Add your insurance
          </Text>
          <Text
            style={{ fontFamily: fontFamilyR }}
            className="text-sm text-[#465C67] font-normal"
          >
            to use it in your upcoming orders
          </Text>
        </View>
        <Button>Add</Button>
      </View>

      <Text
        style={{ fontFamily: fontFamilyB }}
        className="text-lg font-bold text-[#1C3146] mb-4"
      >
        Categories
      </Text>

      <ScrollView className="flex flex-col flex-1">
        <View className="flex flex-row justify-between gap-x-1 mb-4">
          <CategoryCard text="Mom & Baby" className="bg-[#2879FF]" />
          <CategoryCard
            text="Fighting the infection"
            className="bg-[#3CB5B7]"
          />
        </View>
        <View className="flex flex-row justify-between gap-x-1 mb-4">
          <CategoryCard text="Diabetes" className="bg-[#F6529F]" />
          <CategoryCard text="Antibiotics" className="bg-[#FF6563]" />
        </View>
        <View className="flex flex-row justify-between gap-x-1 mb-4">
          <CategoryCard text="Drugs" className="bg-[#FF9253]" />
          <CategoryCard text="Women" className="bg-[#7879F1]" />
        </View>
      </ScrollView>
    </MainLayout>
  );
}

export default Home;
