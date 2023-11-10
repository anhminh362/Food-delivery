import React from "react";
import Background from "../../assets/images/Pattern.png";
// import Banner from "../../common/ui/banner";
import {
  Pressable,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
} from "react-native";
import Header from "../header";

export default Search = ({ navigation }) => {
  return (
    <>
      {/* <ScrollView style={styles.container}> */}
      <ImageBackground
        source={Background}
        style={styles.background}
        resizeMode="cover"
      >
        <Header />
        <View>
          <Text style={styles.text}>Type</Text>
          <View>
            {/* <Button>Restaurant</Button>
            <Button>Menu</Button> */}
          </View>
        </View>
        <View>
          <Text style={styles.text}>Location</Text>
          <View>
            {/* <Button>1 km</Button>
            <Button>Duoi 10km</Button>
            <Button>Tren 10km</Button> */}
          </View>
        </View>
        <View>
          <Text style={styles.text}>Food</Text>
          <View>
            {/* <Button>Cake</Button>
            <Button>Soup</Button>
            <Button>Dessert</Button>
            <Button>Appetizer</Button>
            <Button>Main Course</Button> */}
          </View>
        </View>
      </ImageBackground>
      {/* </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5fa",
    marginTop: 20,
    marginBottom: 50,
  },
  background: {
    flex: 1,
    padding: 30,
  },
  top: {
    marginTop: 25,
  },
  main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  start: {
    fontSize: 31,
    fontWeight: "700",
  },
  notificationIcon: {
    marginRight: 30,
  },
  searchView: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  searchBar: {
    color: "#fff",
    flexDirection: "row",
    // marginLeft: "-34",
    borderRadius: 15,
    // opacity:1,
    alignItems: "center",
    padding: 5,
    backgroundColor: "#eae3fc",
    width: "83%",
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 15,
  },
  searchinput: {},
  viewMore: {
    color: "#9d6afc",
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
  options: {},
  Nearest: {
    marginTop: 22,
  },
  text: {
    fontWeight: "700",
    marginBottom: 12,
    color: "#22242E",
    fontSize: 15,
    marginTop: 20,
  },
});
