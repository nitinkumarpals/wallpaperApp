import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
export default function forYou() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Library" component={Library}></Tab.Screen>
        <Tab.Screen name="Liked" component={Liked}></Tab.Screen>
        <Tab.Screen name="Suggested" component={Suggested}></Tab.Screen>
      </Tab.Navigator>
  );
}
function Library() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
function Liked() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}
function Suggested() {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
}
