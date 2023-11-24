import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Card({ data }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("DetailPro");
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={data.image}
        ></Image>
        <View style={styles.content}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.mins}>{data.time}</Text>
          {/* <Text style={styles.name}>Vegan Resto</Text>
          <Text style={styles.mins}>12 Mins</Text> */}
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 22,
    backgroundColor: "#FFF",
    padding: 26,
    width: 147,
    height: 184,
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    alignItems: "center",
    flexDirection: "column",
    gap: 5,
  },
  img: {},
  name: {
    fontWeight: "700",
  },
  mins: {
    color: "#22242E",
    opacity: 0.5,
  },
});
