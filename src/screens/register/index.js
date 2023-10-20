import React, { Component } from "react";
import { Text, StyleSheet, View, Image, TextInput } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const RegisterPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
          <View style={styles.headerTitle}>
            <Text style={styles.headerFont}>Selamat Datang</Text>
            <Text style={styles.subHeaderFont}>Daftar untuk melanjutkan yah</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
