import { DownloadPicture } from "@/components/BottomSheet";
import { ImageCard } from "@/components/imageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper, wallpaper } from "@/hooks/useWallpaper";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
//ideogram.ai/assets/progressive-image/balanced/response/-xFDwBIbSaW7wQZ671MUBA
//ideogram.ai/assets/progressive-image/balanced/response/ECgQx5UJSkGna3sCyaVMsA
// https: https:
export default function explore() {
  const wallpapers = useWallpaper();
  const [selectedWallpaper, setSelectedWallpaper] =
    useState<wallpaper | null>();
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
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard
                    onPress={() => {
                      setSelectedWallpaper(item);
                    }}
                    wallpaper={item}
                  />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 1)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard
                    onPress={() => {
                      setSelectedWallpaper(item);
                    }}
                    wallpaper={item}
                  />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </ThemedView>
        <Text>Explore Page</Text>
      </ParallaxScrollView>
      {selectedWallpaper && (
        <DownloadPicture onClose={() => setSelectedWallpaper(null)} />
      )}
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
