import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Categories from "../components/Categories";
import {UserIcon,ChevronDownIcon, MagnifyingGlassIcon,AdjustmentHorizontal, AdjustmentsVerticalIcon,} from "react-native-heroicons/outline"
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-500">
        <View className="flex-row  items-center mx-4 space-x-2">
          <Image
            source={{
              /* uri: "https://consumer-component-library.roocdn.com/26.31.1/static/images/logo-teal.svg", */
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00ccbb" />
            </Text>
          </View>
          <UserIcon size={35} color="#00ccbb" />
        </View>
        {/* search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-2">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
             <MagnifyingGlassIcon size={20} color="gray"  />
            <TextInput placeholder="Restaurants and cuisines" keyboardType="default"/>
          </View>
          <AdjustmentsVerticalIcon  color="#00ccbb"/>
        </View>

        {/* body */}
        <ScrollView className="bg-gray-100 " contentContainerStyle={{paddingBottom:100}}>
          {/* categories */}
          <Categories/>
          {/* featured rows */}
        </ScrollView>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
