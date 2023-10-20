import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
          <View style={styles.headerTitle}>
            <Text style={styles.headerFont}>Hello</Text>
            <Text style={styles.subHeaderFont}>Masuk untuk melanjutkan yah</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
