import { FlatList } from "react-native-gesture-handler";
import { ThemedView } from "./ThemedView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { StyleSheet, View } from "react-native";
import { ImageCard } from "./imageCard";
import { useState } from "react";
import { DownloadPicture } from "./BottomSheet";

export function SplitView({ wallpapers }: { wallpapers: Wallpaper[] }) {
  const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(
    null
  );
  return (
    <View>
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
      {selectedWallpaper && (
        <DownloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
        />
      )}
    </View>
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
