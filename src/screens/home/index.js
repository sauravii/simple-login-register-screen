import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/AntDesign";

const HomePage = () => {
  const data = [
    {
      id: 1,
      title: "Miracleye",
      description: "Web Design Project",
      img: require("../../assets/images/miracleye.png"),
    },
    {
      id: 2,
      title: "Culinara",
      description: "FnB Design App",
      img: require("../../assets/images/culinara.png"),
    },
    {
      id: 3,
      title: "Donesia",
      description: "Fund Raising Design App",
      img: require("../../assets/images/donesia.png"),
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../assets/images/sheren.jpg")} style={styles.imgProfile} />
          <Text style={styles.title}>Hello, I'm Sheren Aura</Text>
          <Text style={styles.description}>I'm a Frontend Enthuasiast and I love to learn a lot of things. I'm a student of Vocational HighSchool Telkom Purwokerto and now I'm in 12th grade. Nice to meet you:D</Text>
          <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.txtBtnPrimary}>Contact me</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.projectTitleContainer}>My Recent Project</Text>
          {data.map((item) => {
            return (
              <View>
                <View style={styles.projectContainer}>
                  <Image style={styles.projectImg} source={item.img} />
                  <View style={styles.descContainer}>
                    <View style={styles.textContainer}>
                      <Text style={styles.projectTitle}>{item.title}</Text>
                      <Text style={styles.projectDesc}>{item.description}</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                      <Icon style={styles.icon} name="arrowright" size={18} color="#FFFFFF" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;
