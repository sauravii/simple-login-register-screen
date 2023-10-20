import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";

export default StyleSheet.create({
  container: {
    marginVertical: normalize(50, "height"),
  },
  logo: {
    width: 75,
    height: 75,
  },
  headerTitle: {
    marginVertical: normalize(30, "height"),
  },
  headerFont: {
    ...fonts.lgHeader,
    color: palettes.default.text,
    marginBottom: -5,
  },
  subHeaderFont: {
    ...fonts.md2,
    color: palettes.default.textSecondary,
  },
});
