import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import headerMenuIcon from '../../assets/header-list-icon.png';
import topbarIcon from '../../assets/topbar-icon.png';
import headerShopIcon from '../../assets/header-shop-icon.png';
import headerShopWithBadgeIcon from '../../assets/header-shop-badge-icon.png';
import { useFonts } from '../../contexts/FontsContext';

export default function MainHeader({
  title,
  iconType = 'menu',
  withShopIcon = true,
  showBadge = true,
}) {
  const { goBack } = useNavigation();
  const leftIcon = iconType === 'menu' ? headerMenuIcon : topbarIcon;
  const rightIcon = showBadge ? headerShopWithBadgeIcon : headerShopIcon;
  const { fontsLoaded } = useFonts();
  const mansalvaFontFamily = fontsLoaded ? 'Mansalva-Regular' : '';
  return (
    <View className="flex flex-row justify-between items-center mb-10 relative">
      <TouchableOpacity
        onPress={() => {
          if (iconType === 'back') {
            goBack();
          }
        }}
      >
        <Image source={leftIcon} />
      </TouchableOpacity>
      <Text
        style={{ fontFamily: mansalvaFontFamily }}
        className="font-normal text-2xl text-[#081C34] absolute flex w-full text-center"
      >
        {title}
      </Text>
      {withShopIcon ? (
        <TouchableOpacity>
          <Image source={rightIcon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
