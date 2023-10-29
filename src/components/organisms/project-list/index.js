import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { palettes } from "../../../utils/palettes";
import { fonts } from "../../../utils/fonts";
import ButtonMain from "../../atomics/button-main";

const ProjectListContainer = (props) => {
  return (
    <View>
      <View style={styles.projectContainer}>
        <Image style={styles.projectImg} source={props.imgSource} />
        <View style={styles.descContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.projectTitle}>{props.projectTitle}</Text>
            <Text style={styles.projectDesc}>{props.projectDesc}</Text>
          </View>
          <ButtonMain checkPrimaryCondition={false} btnStyle={styles.buttonContainer} iconName="arrowright" iconSize={18} iconColor="#FFFFFF" />
        </View>
      </View>
    </View>
  );
};

export default ProjectListContainer;

const styles = StyleSheet.create({
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
