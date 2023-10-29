import React, { Component, useState } from "react";
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import ButtonMain from "../../components/atomics/button-main";
import InputTextMain from "../../components/molecules/input-text-main";

const LoginPage = ({ navigation }) => {
  const [showPassword, setShowPassowrd] = useState(true);

  const onPressShowPassword = () => {
    setShowPassowrd(!showPassword);
  };

  const ShowPassword = () => <TouchableOpacity onPress={onPressShowPassword}>{showPassword ? <FontAwesome name="eye-slash" size={16} /> : <FontAwesome name="eye" size={16} />}</TouchableOpacity>;

  handleRegister = () => {
    navigation.navigate("Register");
  };

  handleHomePage = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* header */}
        <View>
          <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
          <View style={styles.headerTitle}>
            <Text style={styles.headerFont}>Hello</Text>
            <Text style={styles.subHeaderFont}>Masuk untuk melanjutkan yah</Text>
          </View>
        </View>

        {/* body-form */}
        <View style={{ gap: 18 }}>
          <InputTextMain placeholder="Username" formStyle={styles.formStyle} />
          <InputTextMain customInputStyle={styles.inputContainer} placeholder="Password" secureText={showPassword} customRightIcon={<ShowPassword />} />
          <ButtonMain checkPrimaryCondition={true} title="Lupa Password?" textStyle={styles.subHeaderFont} btnStyle={{ alignItems: "flex-end" }} />
        </View>

        {/* footer */}
        <View style={styles.footerContainer}>
          <ButtonMain checkPrimaryCondition={true} onPress={handleHomePage} btnStyle={styles.btnPrimary} title="Masuk" textStyle={styles.txtBtnPrimary} />
          <View style={styles.separatorStyle}>
            <Image source={require("../../assets/images/stroke.png")} style={{ width: 109 }} />
            <Text style={styles.separatorFont}>Continue With</Text>
            <Image source={require("../../assets/images/stroke.png")} style={{ width: 109 }} />
          </View>
          <ButtonMain checkPrimaryCondition={true} btnStyle={styles.btnSecondary} title="Google" textStyle={styles.txtBtnSecondary} />
          <View style={styles.confirmContainer}>
            <Text style={styles.subHeaderFont}>Belum punya akun?</Text>
            <ButtonMain checkPrimaryCondition={true} title="Daftar" textStyle={styles.confirmStyle} onPress={handleRegister} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
