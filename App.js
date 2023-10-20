import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LoginPage from "./src/screens/login";
import RegisterPage from "./src/screens/register";
import normalize from "react-native-normalize";
import { palettes } from "./src/utils/palettes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <RegisterPage />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palettes.default.contentView,
    marginTop: normalize(35, "height"),
    marginHorizontal: normalize(25, "width"),
  },
});
