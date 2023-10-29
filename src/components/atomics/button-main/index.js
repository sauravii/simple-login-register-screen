import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { palettes } from "../../../utils/palettes";
import { fonts } from "../../../utils/fonts";
import Icon from "react-native-vector-icons/AntDesign";

const ButtonMain = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.btnStyle}>
      {props.checkPrimaryCondition ? <Text style={props.textStyle}>{props.title}</Text> : <Icon name={props.iconName} size={props.iconSize} color={props.iconColor} />}
    </TouchableOpacity>
  );
};

export default ButtonMain;
