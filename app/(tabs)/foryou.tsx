import { SafeAreaView, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="Library" component={Library}></Tab.Screen>
        <Tab.Screen name="Liked" component={Liked}></Tab.Screen>
        <Tab.Screen name="Suggested" component={Suggested}></Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
}

function Library() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Library</Text>
      </View>
    </SafeAreaView>
  );
}

function Liked() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Liked</Text>
      </View>
    </SafeAreaView>
  );
}

function Suggested() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Suggested</Text>
      </View>
    </SafeAreaView>
  );
}
