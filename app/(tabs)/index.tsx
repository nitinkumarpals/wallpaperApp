import { DownloadPicture } from "@/components/BottomSheet";
import { ImageCard } from "@/components/imageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
//ideogram.ai/assets/progressive-image/balanced/response/-xFDwBIbSaW7wQZ671MUBA
//ideogram.ai/assets/progressive-image/balanced/response/ECgQx5UJSkGna3sCyaVMsA
// https: https:
export default function explore() {
  const wallpapers = useWallpaper();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Link href={"/accountInfo"}>Account</Link>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            source={{ uri: wallpapers[0]?.url ?? "" }}
            style={{ flex: 1 }}
          />
        }
      >
       
        <Text>Explore Page</Text>
      </ParallaxScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    padding: 10,
  },
});
