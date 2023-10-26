import React, { Component, useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

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

  const ShowConfirmPassword = () => (
    <TouchableOpacity onPress={onPressShowPassword} style={{ position: "absolute", right: 25 }}>
      {showConfirmPass ? <FontAwesome name="eye-slash" size={16} /> : <FontAwesome name="eye" size={16} />}
    </TouchableOpacity>
  );

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
          <TextInput placeholder="Nama Lengkap" style={styles.formStyle} />
          <TextInput placeholder="Email" style={styles.formStyle} />
          <View style={styles.inputContainer}>
            <TextInput placeholder="Password" secureTextEntry={showPassword} />
            <ShowPassword />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Ulangi Password" secureTextEntry={showPassword} />
            <ShowConfirmPassword />
          </View>
        </View>

        {/* footer */}
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.btnPrimary} onPress={handleHomePage}>
            <Text style={styles.txtBtnPrimary}>Daftar</Text>
          </TouchableOpacity>
          <View style={styles.separatorStyle}>
            <Image source={require("../../assets/images/stroke.png")} style={{ width: 109 }} />
            <Text style={styles.separatorFont}>Continue With</Text>
            <Image source={require("../../assets/images/stroke.png")} style={{ width: 109 }} />
          </View>
          <TouchableOpacity style={styles.btnSecondary}>
            <Text style={styles.txtBtnSecondary}>Google</Text>
          </TouchableOpacity>
          <View style={styles.confirmContainer}>
            <Text style={styles.subHeaderFont}>Sudah punya akun?</Text>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.confirmStyle}>Masuk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
