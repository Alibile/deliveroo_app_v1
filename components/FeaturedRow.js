import { View, Text,ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
const FeaturedRow = ({ title, description, id }) => {
  return (
    <>
      <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
          <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
        </View>
      <Text className="text-xs text-gray-500 px-4" >{description}</Text>

      <ScrollView horizontal  contentContainerStyle={{
        paddingHorizontal: 15,
        
      }} showsHorizontalScrollIndicator={false} className="pt-4" >
        {/* RestaurantCard */}
     <RestaurantCard id={123}imgUrl="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"title="Yo! Sushi" rating={4.5} genre="Japanese" address="123 Main St" short_description="This is a Test description" dishes={[]} long={20} lat={0} />
     <RestaurantCard id={123}imgUrl="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"title="Yo! Sushi" rating={4.5} genre="Japanese" address="123 Main St" short_description="This is a Test description" dishes={[]} long={20} lat={0} />
     <RestaurantCard id={1234}imgUrl="https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"title="Yo! Sushi" rating={4.5} genre="Japanese" address="123 Main St" short_description="This is a Test description" dishes={[]} long={20} lat={0} />
     <RestaurantCard id={1234}imgUrl="https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"title="Yo! Sushi" rating={4.5} genre="Japanese" address="123 Main St" short_description="This is a Test description" dishes={[]} long={20} lat={0} />
      </ScrollView>
      </View>
    </>
  );
};

export default FeaturedRow;
