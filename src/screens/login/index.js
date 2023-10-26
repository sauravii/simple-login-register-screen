import React, { Component, useState } from "react";
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

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
          <TextInput placeholder="Username" style={styles.formStyle} />
          <View style={styles.inputContainer}>
            <TextInput placeholder="Password" secureTextEntry={showPassword} />
            <ShowPassword />
          </View>
          <TouchableOpacity style={{ alignItems: "flex-end" }}>
            <Text style={styles.subHeaderFont}>Lupa Password?</Text>
          </TouchableOpacity>
        </View>

        {/* footer */}
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.btnPrimary} onPress={handleHomePage}>
            <Text style={styles.txtBtnPrimary}>Masuk</Text>
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
            <Text style={styles.subHeaderFont}>Belum punya akun?</Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.confirmStyle}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
