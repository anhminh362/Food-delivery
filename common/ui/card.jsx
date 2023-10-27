import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
export default function Card() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require(`../../assets/images/Restaurant.png`)}
        ></Image>
      <View style={styles.content}>
        <Text style={styles.name}>Vegan Resto</Text>
        <Text style={styles.mins}>12 Mins</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 22,
    backgroundColor: "#FFF",
    // shadowColor: "rgba(90, 108, 234, 0.07)",
    // shadowOffset: "12px 26px 50px 0px",
    padding: 26,
    width: 147,
    height: 184,
    alignItems: "center",
    justifyContent:'space-between',
    // box-shadow: 12px 26px 50px 0px rgba(90, 108, 234, 0.07);
  },
  content: {
    alignItems: "center",
    flexDirection: 'column',
    gap: 5
  },
  img: {},
  name: {
    fontWeight:'700'
  },
  mins: {
    color:'#22242E',
    opacity:0.5
  },
});
