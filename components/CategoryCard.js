import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl,title}) => {
  console.log("img",imgUrl)
  console.log(title)

  return (
<TouchableOpacity className="relative mr-20">
       {/* <Image source={{uri: imgUrl}} className="h-20 w-20 rounded"/> */}
      < Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <View className="bg-black">
            <Text className="absolute bottom-1 left-1 text-white font-bold" >{title}</Text>
      </View>
  
    </TouchableOpacity>
  )
}

export default CategoryCard