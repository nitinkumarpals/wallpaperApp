import { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { DownloadPicture } from "@/components/BottomSheet";

export default function Account() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Accounts Page</Text>
        <Button
          title="Open Bottom Sheet"
          onPress={() => setPictureOpen(true)}
        />
        {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)}
        />}
      </View>
    </SafeAreaView>
  );
}
