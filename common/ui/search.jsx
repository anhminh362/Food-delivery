import React from "react";
import Background from "../../assets/images/Pattern.png";
import {
  Pressable,
  ImageBackground,
  Text,
  View,
  StyleSheet,
} from "react-native";
import Header from "../header";
import ListButton from "./button";

export default Search = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={Background}
          style={styles.background}
          resizeMode="cover"
        >
          <Header />
          <View style={styles.optionList}>
            <View style={styles.option}>
              <Text style={styles.text}>Type</Text>
              <ListButton list={["Restaurant", "Menu"]} />
            </View>
            <View style={styles.option}>
              <Text style={styles.text}>Location</Text>
              <ListButton list={["1km", ">10km", "<10km"]} />
            </View>
            <View style={styles.option}>
              <Text style={styles.text}>Food</Text>
              <ListButton
                list={["Cake", "Soup", "Main Course", "Appetizer", "Dessert"]}
              />
            </View>
          </View>
          <View style={styles.buttonView}>
            <Pressable style={styles.searchButton}>
              <Text style={styles.searchText}>Search</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    padding: 30,
  },
  text: {
    fontWeight: "700",
    color: "#22242E",
    fontSize: 15,
  },
  buttonView: {
    marginTop: 150,
  },
  searchButton: {
    backgroundColor: "#6B50F6",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
  },
  searchText: {
    fontWeight: "700",
    color: "#FEFEFF",
    fontSize: 15,
  },
  optionList: {
    flexDirection: "column",
  },
  option: {
    marginVertical: 10,
  },
});
