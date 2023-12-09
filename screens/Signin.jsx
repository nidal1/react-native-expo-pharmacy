import { useForm } from 'react-hook-form';
import { Text, View } from 'react-native';
import React from 'react';
import Button from '../components/ui/Button';
import AuthHeader from '../components/auth/AuthHeader';
import Wrapper from '../components/ui/Wrapper';
import GoogleIcon from '../assets/Google-logo-1.png';
import { useFonts } from '../contexts/FontsContext';
import Separator from '../components/auth/Separator';
import TextInput from '../components/ui/TextInput';
import AuthGoTo from '../components/auth/AuthGoTo';

export default function Signin({ navigation }) {
  const { register } = useForm();
  const { fontsLoaded } = useFonts();
  const fontFamilyR = fontsLoaded ? 'Raleway-Regular' : '';
  return (
    <View className="bg-white flex-1">
      <AuthHeader text="Sign in" />

      <Wrapper>
        <Button
          mode="outlined"
          buttonColor="white"
          withIcon
          customIcon={GoogleIcon}
          buttonClassName="mt-8"
          textStyle={{ fontFamily: fontFamilyR }}
        >
          Sign in with Google
        </Button>

        <Separator text="Sign in with Email" className="max-w-[130px]" />

        <TextInput placeholder="email" {...register('email')} />

        <TextInput placeholder="password" {...register('password')} right />

        <Text
          style={{ fontFamily: fontFamilyR }}
          className="text-sm text-[#2879FF] text-right"
        >
          Forget password?
        </Text>

        <View className="justify-between m-0 h-[105px] mt-8">
          <Button
            mode="contained"
            onPress={() => navigation.navigate('signup')}
          >
            Sign in
          </Button>

          <AuthGoTo
            text="Don’t have an account? "
            gotoText="Sign up "
            onPress={() => navigation.navigate('signup')}
          />
        </View>
      </Wrapper>
    </View>
  );
}
