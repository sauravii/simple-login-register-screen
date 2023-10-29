import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { palettes } from "../../../utils/palettes";
import { fonts } from "../../../utils/fonts";

const InputTextMain = (props) => {
  return (
    <View style={props.customInputStyle}>
      <TextInput placeholder={props.placeholder} style={props.formStyle} secureTextEntry={props.secureText} />
      {props.customRightIcon && <View>{props.customRightIcon}</View>}
    </View>
  );
};

export default InputTextMain;
