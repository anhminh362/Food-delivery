import React from "react";
import Background from "../../assets/images/Pattern.png";
// import Banner from "../assets/images/banner1.png";
import Banner from "../../common/ui/banner";
import {
  Pressable,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import Card from "../../common/ui/card";
import CardProduct from "../../common/ui/box";
import Header from "../../common/header";
// import CardList from "../common/ui/listCard";

const listCard = [{ name: "Vegan Resto", img: "Restaurant", time: "12mins" }];
export default Home = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={Background}
          style={styles.background}
          resizeMode="cover"
        >
          <Header />
          <Banner />
          <View style={styles.Nearest}>
            <View style={styles.session}>
              <Text style={styles.text}>Nearest Restaurant</Text>
              <Pressable>
                <Text style={styles.viewMore}>View more</Text>
              </Pressable>
            </View>
            <View style={styles.listCard}>
              <Card />
              <Card />
            </View>
          </View>
          <View style={styles.Nearest}>
            <View style={styles.session}>
              <Text style={styles.text}>Popular Menu</Text>
              <Pressable>
                <Text style={styles.viewMore}>View more</Text>
              </Pressable>
            </View>
            <View style={styles.listBox}>
              <CardProduct />
              <CardProduct />
              <CardProduct />
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5fa",
    marginBottom: 50,
  },
  background: {
    flex: 1,
    padding: 30,
  },
  session: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  listCard: {
    padding: 10,
    flexDirection: "row",
    gap: 35,
  },
  listBox: {
    flexDirection: "column",
    gap: 15,
  },

  filterView: {
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eae3fc",
    borderRadius: 15,
    width: "15%",
    height: 50,
  },
  Nearest: {
    marginTop: 22,
  },
  text: {
    fontWeight: "700",
    marginBottom: 12,
    color: "#22242E",
    fontSize: 15,
  },
});
