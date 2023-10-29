import React, { Component, useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import ButtonMain from "../../components/atomics/button-main";
import InputTextMain from "../../components/molecules/input-text-main";

const RegisterPage = ({ navigation }) => {
  const [showPassword, setShowPassowrd] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);

  const onPressShowPassword = () => {
    setShowPassowrd(!showPassword);
  };

  const onPressConfirmShowPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  const ShowPassword = () => <TouchableOpacity onPress={onPressShowPassword}>{showPassword ? <FontAwesome name="eye-slash" size={16} /> : <FontAwesome name="eye" size={16} />}</TouchableOpacity>;

  const ShowConfirmPassword = () => <TouchableOpacity onPress={onPressConfirmShowPassword}>{showConfirmPass ? <FontAwesome name="eye-slash" size={16} /> : <FontAwesome name="eye" size={16} />}</TouchableOpacity>;

  handleLogin = () => {
    navigation.navigate("Login");
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
            <Text style={styles.headerFont}>Selamat Datang</Text>
            <Text style={styles.subHeaderFont}>Daftar untuk melanjutkan yah</Text>
          </View>
        </View>

        {/* body-form */}
        <View style={{ gap: 18 }}>
          <InputTextMain placeholder="Nama Lengkap" formStyle={styles.formStyle} />
          <InputTextMain placeholder="Email" formStyle={styles.formStyle} />
          <InputTextMain customInputStyle={styles.inputContainer} placeholder="Password" secureText={showPassword} customRightIcon={<ShowPassword />} />
          <InputTextMain customInputStyle={styles.inputContainer} placeholder="Ulangi Password" secureText={showConfirmPass} customRightIcon={<ShowConfirmPassword />} />
        </View>

        {/* footer */}
        <View style={styles.footerContainer}>
          <ButtonMain checkPrimaryCondition={true} onPress={handleHomePage} btnStyle={styles.btnPrimary} title="Daftar" textStyle={styles.txtBtnPrimary} />
          <View style={styles.separatorStyle}>
            <Image source={require("../../assets/images/stroke.png")} style={{ width: 109 }} />
            <Text style={styles.separatorFont}>Continue With</Text>
            <Image source={require("../../assets/images/stroke.png")} style={{ width: 109 }} />
          </View>
          <ButtonMain checkPrimaryCondition={true} btnStyle={styles.btnSecondary} title="Google" textStyle={styles.txtBtnSecondary} />
          <View style={styles.confirmContainer}>
            <Text style={styles.subHeaderFont}>Sudah punya akun?</Text>
            <ButtonMain checkPrimaryCondition={true} title="Masuk" textStyle={styles.confirmStyle} onPress={handleLogin} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
