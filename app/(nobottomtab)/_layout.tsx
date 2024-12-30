import { Link, Slot } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "black" }}>
          <Text style={{ color: "white" }}>Go Back</Text>
      </View>
      <Slot />
    </SafeAreaView>
  );
}
