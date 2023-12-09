import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import React from 'react';
import Button from '../components/ui/Button';
import AuthHeader from '../components/auth/AuthHeader';
import Wrapper from '../components/ui/Wrapper';
import GoogleIcon from '../assets/Google-logo-1.png';
import { useFonts } from '../contexts/FontsContext';
import Separator from '../components/auth/Separator';
import TextInput from '../components/ui/TextInput';
import GenderButtons from '../components/auth/GenderButtons';
import AuthGoTo from '../components/auth/AuthGoTo';

export default function Signup({ navigation }) {
  const { register } = useForm();
  const { fontsLoaded } = useFonts();
  const fontFamilyR = fontsLoaded ? 'Raleway-Regular' : '';
  return (
    <View className="bg-white flex-1">
      <AuthHeader text="Sign up" />

      <Wrapper>
        <Button
          mode="outlined"
          buttonColor="white"
          withIcon
          customIcon={GoogleIcon}
          buttonClassName="mt-8"
          textStyle={{ fontFamily: fontFamilyR }}
        >
          Sign up with Google
        </Button>

        <Separator text="Sign up with Email" className="max-w-[130px]" />

        <TextInput placeholder="full name" {...register('name')} />

        <TextInput placeholder="phone number" {...register('phone')} />

        <TextInput placeholder="email" {...register('email')} />

        <TextInput placeholder="password" {...register('password')} right />
        <TextInput
          placeholder="confirm password"
          {...register('confirmPassword')}
        />

        <View className="justify-between m-0 h-[220px] mt-8">
          <GenderButtons />

          <Button
            mode="contained"
            onPress={() => navigation.navigate('signup')}
          >
            Sign up
          </Button>

          <AuthGoTo
            text="Already have an account? "
            gotoText="Sign in "
            onPress={() => navigation.navigate('signin')}
          />
        </View>
      </Wrapper>
    </View>
  );
}
