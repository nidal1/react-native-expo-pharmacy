import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import location from '../../assets/location.png';
import icLocation from '../../assets/ic-location.png';
import FlatTextInput from '../ui/FlatTextInput';
import ReviewCard from '../ui/ReviewCard';
import savedPharmacy1 from '../../assets/saved-pharmacy-1.png';
import savedPharmacy2 from '../../assets/saved-pharmacy-2.png';
import savedPharmacy3 from '../../assets/saved-pharmacy-3.png';

export default function Nearest() {
  return (
    <View className="flex  flex-1 bg-[#FBFCFE] pt-5">
      <FlatTextInput right placeholder="Search nearest pharmacy" />
      <View className="h-2/3 mt-3 relative rounded-md overflow-hidden">
        <MapView
          style={StyleSheet.absoluteFillObject}
          mapType="standard"
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: 33.5792,
            longitude: -7.6133,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onPress={(event) => console.log(event.target)}
        >
          <Marker
            coordinate={{
              latitude: 33.5792,
              longitude: -7.6133,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />

          <Marker
            coordinate={{
              latitude: 33.5,
              longitude: -7.6133,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Image source={icLocation} />
          </Marker>

          <Marker
            coordinate={{
              latitude: 33.5792,
              longitude: -7.6133,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Image source={icLocation} />
          </Marker>

          <Marker
            coordinate={{
              latitude: 33.5792,
              longitude: -7.6133,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Image source={icLocation} />
          </Marker>
        </MapView>
        <TouchableOpacity className="absolute top-3 right-3">
          <Image source={location} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ rowGap: 10 }}>
        <ReviewCard image={savedPharmacy1} />
        <ReviewCard image={savedPharmacy2} />
        <ReviewCard image={savedPharmacy3} />
      </ScrollView>
    </View>
  );
}
