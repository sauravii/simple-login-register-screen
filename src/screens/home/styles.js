import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import { palettes } from "../../utils/palettes";
import { fonts } from "../../utils/fonts";

export default StyleSheet.create({
  container: {
    paddingTop: normalize(30, "height"),
    paddingBottom: normalize(30, "height"),
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
  likesContainer: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    marginVertical: 6,
  },
  btnLikesSection: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  titleLikes: {
    ...fonts.md5,
    marginBottom: 8,
    marginTop: 40,
    textAlign: "center",
  },
  likesCount: {
    ...fonts.lg1,
    textAlign: "center",
    color: palettes.default.error,
  },
  likesDesc: {
    ...fonts.md3,
  },
});
