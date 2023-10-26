import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import normalize from "react-native-normalize";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { palettes } from "./src/utils/palettes";
import LoginPage from "./src/screens/login";
import RegisterPage from "./src/screens/register";
import HomePage from "./src/screens/home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular: require("./src/assets/fonts/Poppins-Regular.ttf"),
    Poppins_500Medium: require("./src/assets/fonts/Poppins-Medium.ttf"),
    Poppins_600SemiBold: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    Poppins_700Bold: require("./src/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="LoginPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palettes.default.contentPrimary,
    marginTop: normalize(35, "height"),
  },
});
