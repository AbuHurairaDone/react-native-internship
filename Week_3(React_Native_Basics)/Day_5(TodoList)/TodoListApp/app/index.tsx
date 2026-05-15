import { Text, View } from "react-native";
import { HomeScreen } from "../src/HomeScreen"
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{flex:1}}>
      <HomeScreen />
    </SafeAreaView>
  );
}
