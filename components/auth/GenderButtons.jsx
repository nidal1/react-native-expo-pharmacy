import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import genderME from '../../assets/GenderMaleE.png';
import genderMD from '../../assets/GenderMaleD.png';
import genderFE from '../../assets/GenderFemaleE.png';
import genderFD from '../../assets/GenderFemaleD.png';
import { useFonts } from '../../contexts/FontsContext';

const sortByGender = (a, b) => {
  if (a.gender > b.gender) {
    return -1;
  }
  if (a.gender < b.gender) {
    return 1;
  }
  return 0;
};

export default function GenderButtons() {
  const [buttons, setActive] = useState([
    {
      gender: 'male',
      active: true,
    },
    {
      gender: 'female',
      active: false,
    },
  ]);

  const handleSetActive = useCallback(
    (id) => {
      const currentTarget = buttons.find((b) => b.gender === id);
      currentTarget.active = !currentTarget.active;

      const prevTarget = buttons.find((b) => b.gender !== id);
      prevTarget.active = !prevTarget.active;
      setActive([currentTarget, prevTarget]);
    },
    [buttons]
  );
  const renderButtons = useMemo(
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      buttons
        .sort((a, b) => sortByGender(a, b))
        .map((b) => {
          if (b.gender === 'male') {
            return (
              <GenderButton
                key={b.gender}
                sourceImageE={genderME}
                sourceImageD={genderMD}
                text="Male"
                isActive={b.active}
                onPress={() => handleSetActive(b.gender)}
              />
            );
          }
          return (
            <GenderButton
              key={b.gender}
              sourceImageE={genderFE}
              sourceImageD={genderFD}
              text="Female"
              isActive={b.active}
              onPress={() => handleSetActive(b.gender)}
            />
          );
        }),
    [buttons, handleSetActive]
  );
  return (
    <View className="flex-row max-w-[272px] w-full justify-between mx-auto">
      {renderButtons}
    </View>
  );
}

function GenderButton({
  sourceImageE,
  sourceImageD,
  text,
  isActive = false,
  onPress,
}) {
  const { fontsLoaded } = useFonts();
  const fontFamilyR = fontsLoaded ? 'Raleway-Regular' : '';
  const btnClassName = !isActive
    ? 'p-5 rounded-lg bg-[#F5F6F8] max-w-[128px] w-full'
    : 'p-5 rounded-lg bg-white border border-[#2879FF] max-w-[128px] w-full';

  const textClassName = !isActive
    ? 'text-[#A7B0B5] text-[18px] font-normal'
    : 'text-[#2879FF] text-[18px] font-normal';
  return (
    <TouchableOpacity className={btnClassName} onPress={onPress}>
      <View className="justify-center items-center">
        <Image source={isActive ? sourceImageE : sourceImageD} />
        <Text style={{ fontFamily: fontFamilyR }} className={textClassName}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
