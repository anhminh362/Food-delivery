import React from "react";
import {
  Pressable,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Background from "../../assets/images/background.png";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Call = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Background}
        style={styles.background}
        resizeMode="cover"
      >
        <Image
          style={styles.img}
          source={require(`../../assets/images/image_per3.jpg`)}
        />
        <View style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>
            Arash Ranjbaran
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginLeft: "auto",
              marginRight: "auto",
              color: "#ccc",
            }}
          >
            Ringing....
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 200,
            marginLeft: "auto",
            marginRight: "auto",
            gap: 150,
          }}
        >
          <Text
            style={{
              padding: 20,
              backgroundColor: "#f0edfe",
              borderRadius: 150,
            }}
          >
            <Ionicons
              name="volume-low"
              color={"#6b50f6"}
              size={30}
              style={{ justifyContent: "center", alignItems: "center" }}
            ></Ionicons>
          </Text>
          <Text
            style={{
              padding: 20,
              backgroundColor: "#ff4b4b",
              borderRadius: 150,
            }}
          >
            <Ionicons name="close" color={"#fff"} size={30}></Ionicons>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 180,
    height: 180,
    borderRadius: 80,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 110,
  },
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});
