import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

export const poppins = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
};

export const fonts = {
  sm1: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },
  md1: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  md2: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  md3: {
    fontSize: 14,
    fontFamily: "Poppins-600SemiBold",
  },
  lgHeader: {
    fontSize: 30,
    fontFamily: "Poppins_600SemiBold",
  },
};
