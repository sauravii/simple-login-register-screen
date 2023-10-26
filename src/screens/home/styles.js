import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";

export default StyleSheet.create({
  container: {
    paddingTop: normalize(30, "height"),
    paddingHorizontal: normalize(30, "width"),
    backgroundColor: palettes.default.contentSecondary,
    flex: 1,
  },
  imgProfile: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },
  title: {
    ...fonts.lgTitle,
    color: palettes.default.text,
    marginTop: 18,
  },
  description: {
    ...fonts.md1,
    marginVertical: 10,
    textAlign: "center",
    lineHeight: 22,
  },
  btnPrimary: {
    backgroundColor: palettes.default.primary,
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    width: "40%",
    marginVertical: 12,
  },
  txtBtnPrimary: {
    ...fonts.md3,
    color: palettes.default.contentPrimary,
  },
  projectTitleContainer: {
    ...fonts.lgSubTitle,
    textAlign: "center",
    marginTop: 40,
  },
  projectContainer: {
    flex: 1,
    padding: 12,
  },
  projectImg: {
    width: 320,
    height: 180,
    alignSelf: "center",
    borderRadius: 10,
  },
  descContainer: {
    flex: 1,
    maxHeight: 70,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
    maxHeight: 120,
    maxWidth: 220,
  },
  projectTitle: {
    ...fonts.md4,
    marginTop: 10,
  },
  projectDesc: {
    ...fonts.md2,
  },
  buttonContainer: {
    justifyContent: "center",
    backgroundColor: palettes.default.primary,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    maxHeight: 50,
    maxWidth: 50,
    borderRadius: 20,
  },
});
