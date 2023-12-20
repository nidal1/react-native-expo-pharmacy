import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import Button from '../ui/Button';
import chat from '../../assets/chat-d.png';
import eye from '../../assets/eye-icon.png';
import heart from '../../assets/heart-icon.png';
import call from '../../assets/phone-icon.png';
import rating from '../../assets/rating.png';
import shareNetwork from '../../assets/share-network-icon.png';

export default function SavedPharmacyCard({ pharmacyImage }) {
  return (
    <View className="px-2">
      <View
        className="bg-white rounded-md mt-4"
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
      >
        <View className="flex flex-row p-3">
          <Image source={pharmacyImage} className="mr-2" />
          <View className="flex-col flex-1">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-sm text-[#1C3146] font-bold">
                UM Pharmacy
              </Text>
              <View className="flex flex-row items-center">
                <Text className="text-[10px] text-[#A7B0B5]">4.0</Text>
                <Image source={rating} />
                <Text className="text-[10px] text-[#A7B0B5]">(1,492)</Text>
              </View>
            </View>
            <Text className="text-[10px] text-[#A7B0B5]">600M from you</Text>
            <Text className="text-sm text-[#465C67]">
              UM some text are her just to show Pharmacy
            </Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            columnGap: 8,
          }}
          className="px-3 mb-3"
        >
          <Button withIcon customIcon={eye}>
            View
          </Button>
          <Button mode="outlined" withIcon customIcon={chat}>
            Chat
          </Button>
          <Button mode="outlined" withIcon customIcon={call}>
            Call
          </Button>
          <Button mode="outlined" withIcon customIcon={shareNetwork}>
            Share
          </Button>
          <Button mode="outlined" withIcon customIcon={heart}>
            Save
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}
