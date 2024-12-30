import { Link } from "expo-router";
import {  SafeAreaView, Text, View } from "react-native";

export default function explore(){
    return (
      <SafeAreaView>
        <Text>explore page</Text>
        <Link href={"/accountInfo"}>Account</Link>
      </SafeAreaView>
    );
}