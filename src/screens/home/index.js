import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ButtonMain from "../../components/atomics/button-main";
import ProjectListContainer from "../../components/organisms/project-list";
import styles from "./styles";

const HomePage = () => {
  const [count, setCount] = useState(0);

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

  const onPressLikes = () => {
    setCount(count + 1);
  };

  const onPressDislikes = () => {
    if (count === 0) {
      Alert.alert("Maaf sudah mencapai batas");
    } else {
      setCount(count - 1);
    }
  };

  const BtnDislikesClicked = () => (
    <TouchableOpacity onPress={onPressDislikes}>
      <FontAwesome name="thumbs-down" size={25} />
    </TouchableOpacity>
  );

  const BtnLikesClicked = () => (
    <TouchableOpacity onPress={onPressLikes}>
      <FontAwesome name="thumbs-up" size={25} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#FFF9E9" />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ alignItems: "center" }}>
            <Image source={require("../../assets/images/sheren.jpg")} style={styles.imgProfile} />
            <Text style={styles.title}>Hello, I'm Sheren Aura</Text>
            <Text style={styles.description}>I'm a Frontend Enthuasiast and I love to learn a lot of things. I'm a student of Vocational HighSchool Telkom Purwokerto and now I'm in 12th grade. Nice to meet you:D</Text>
            <ButtonMain checkPrimaryCondition={true} btnStyle={styles.btnPrimary} title="Contact me" textStyle={styles.txtBtnPrimary} />
          </View>

          <View>
            <Text style={styles.projectTitleContainer}>My Recent Project</Text>

            {data.map((item) => {
              return <ProjectListContainer imgSource={item.img} projectTitle={item.title} projectDesc={item.description} />;
            })}
          </View>

          <Text style={styles.titleLikes}>Like this pages? </Text>
          <Text style={styles.likesCount}>{count}</Text>

          <View style={styles.likesContainer}>
            <View style={styles.btnLikesSection}>
              <BtnDislikesClicked />
              <Text style={styles.likesDesc}>Dislikes</Text>
            </View>
            <View style={styles.btnLikesSection}>
              <BtnLikesClicked />
              <Text style={styles.likesDesc}>Likes</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
