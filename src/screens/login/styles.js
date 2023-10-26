import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";

export default StyleSheet.create({
  container: {
    paddingTop: normalize(30, "height"),
    paddingHorizontal: normalize(25, "width"),
    backgroundColor: palettes.default.contentPrimary,
    flex: 1,
  },
  logo: {
    width: 70,
    height: 70,
  },
  headerTitle: {
    marginVertical: normalize(25, "height"),
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
  separatorFont: {
    ...fonts.sm1,
    color: palettes.default.textPlaceholder,
  },
  confirmStyle: {
    ...fonts.md2,
    color: palettes.default.primary,
  },
  formStyle: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: palettes.default.strokePrimary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    ...fonts.md1,
  },
  separatorStyle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    marginVertical: 13,
  },
  btnPrimary: {
    backgroundColor: palettes.default.primary,
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
  },
  btnSecondary: {
    backgroundColor: palettes.default.secondary,
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    borderColor: palettes.default.strokePrimary,
  },
  txtBtnPrimary: {
    ...fonts.md3,
    color: palettes.default.contentPrimary,
  },
  txtBtnSecondary: {
    ...fonts.md3,
    color: palettes.default.text,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: palettes.default.strokePrimary,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  footerContainer: {
    marginTop: 35,
    gap: 10,
  },
  confirmContainer: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
  },
});
