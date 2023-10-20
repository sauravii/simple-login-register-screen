import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LoginPage from "./src/screens/login";
import RegisterPage from "./src/screens/register";
import normalize from "react-native-normalize";
import { palettes } from "./src/utils/palettes";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular: require("./src/assets/fonts/Poppins-Regular.ttf"),
    Poppins_500Medium: require("./src/assets/fonts/Poppins-Medium.ttf"),
    Poppins_600SemiBold: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
