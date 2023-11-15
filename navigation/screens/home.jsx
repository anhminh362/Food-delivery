import React from "react";
import Background from "../../assets/images/Pattern.png";
import { useNavigation } from "@react-navigation/native";
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

export default Home = () => {
  const [showAllItems, setShowAllItems] = React.useState(false);
  const [viewMoreText, setViewMoreText] = React.useState("View more");
  const [ShowAllItems, setshowAllItems] = React.useState(false);
  const [ViewMoreText, setviewMoreText] = React.useState("View more");

  const navigation = useNavigation();
  return (
    <>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={Background}
          style={styles.background}
          resizeMode="cover"
        >
          <Header />
          <Pressable
            onPress={() => {
              navigation.navigate("Promo");
            }}
          >
            <Banner image={require("../../assets/images/Promo.png")} />
          </Pressable>
          <View style={styles.Nearest}>
            <View style={styles.session}>
              <Text style={styles.text}>Nearest Restaurant</Text>
              <Pressable
                onPress={() => {
                  setShowAllItems(!showAllItems);
                  setViewMoreText(showAllItems ? "View more" : "Hidden");
                }}
              >
                <Text style={styles.viewMore}>{viewMoreText}</Text>
              </Pressable>


            </View>
            <View style={styles.listCard}>
              {showAllItems ? (
                <>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </>
              ) : (
                <>
                  <Card />
                  <Card />
                </>
              )}
            </View>
            {/* <CardList list={listCard}/> */}
          </View>
          <View style={styles.Nearest}>
            <View style={styles.session}>
              <Text style={styles.text}>Popular Menu</Text>
              <Pressable
                onPress={() => {
                  setshowAllItems(!ShowAllItems);
                  setviewMoreText(ShowAllItems ? "View more" : "Hidden");
                }}
              >
                <Text style={styles.viewMore}>{ViewMoreText}</Text>
              </Pressable>
            </View>
            <View style={styles.listBox}>
              {ShowAllItems ? (
                <>
                  <CardProduct />
                  <CardProduct />
                  <CardProduct />
                  <CardProduct />
                </>
              ) : (
                <>
                  <CardProduct />
                  <CardProduct />
                </>
              )}
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
    marginTop: 20,
    marginBottom: 50
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
    marginRight: 30
  },
  searchView: {
    alignItems: "center",
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between'
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
    width: '83%',
    height: 50,

  },
  searchIcon: {
    marginHorizontal: 15
  },
  searchinput: {

  },
  viewMore: {
    color: '#9d6afc'
  },
  session: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  listCard: {
    padding: 10,
    flexDirection: 'row',
    gap: 35,
    flexWrap: 'wrap'
  },
  listBox: {
    flexDirection: 'column',
    gap: 15
  },

  filterView: {
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#eae3fc",
    borderRadius: 15,
    width: '15%',
    height: 50,
  },
  options: {

  },
  Nearest: {
    marginTop: 22
  },
  text: {
    fontWeight: '700',
    marginBottom: 12,
    color: "#22242E",
    fontSize: 15
  }
});

