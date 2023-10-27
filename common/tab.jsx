import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-shadow-cards";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Tab({navigation}) {
  return (
    // <Card style={styles.card}>
    <View style={styles.icons}>
      <View style={styles.home}>
        <Text style={styles.home_block}>
          <Ionicons
            style={styles.home_icon}
            name="home"
            color={"#6B50F6"}
            size={30}
          />
          <Text style={styles.text_home}> Home</Text>
        </Text>
      </View>
      <Pressable
      >
        <Ionicons name="person" color={"#B5A7FA"} size={30}></Ionicons>
      </Pressable>
      <Pressable>
        <Icon name="shopping-cart" size={30} color={"#B5A7FA"} />
      </Pressable>
      <Pressable>
        <Ionicons name="chatbubble-ellipses" color={"#E1DCFD"} size={30} />
      </Pressable>
    </View>
    // </Card>
  );
}

const styles = StyleSheet.create({
  background: {
    // flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
  },
  // card: {
  //   marginTop: 40,
  //   marginLeft: "auto",
  //   marginRight: "auto",
  // },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    // marginLeft: "auto",
    // marginRight: "auto",
    // width: 360,
    height: 70,
    backgroundColor: "#fefeff",
    // borderRadius: 20,
    padding: 20,
  },
  find: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    width: 230,
  },
  header: {
    flexDirection: "row",
    marginTop: 90,
  },
  home: {
    flexDirection: "row",
    backgroundColor: "#F0EDFE",
    width: 110,
    height: 40,
    borderRadius: 10,
    marginTop: -8,
  },
  home_block: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  text_home: {
    color: "#6B50F6",
  },
});
