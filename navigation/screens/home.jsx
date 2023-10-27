import React from "react";
import Background from "../../assets/images/Pattern.png";
// import Banner from "../assets/images/banner1.png";
import Banner from "../../common/ui/banner";
import Tab from "../../common/tab";
import {
  Pressable,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Search from '../../assets/images/search-icon.png';
import Ionicons from "react-native-vector-icons/Ionicons";
import Card from "../../common/ui/card";
import CardProduct from "../../common/ui/box";
// import CardList from "../common/ui/listCard";

const listCard=[
  {name:'Vegan Resto',
  img:'Restaurant',
  time:'12mins'}
]
export default Home = ({ navigation }) => {
  return (
    <>
    <ScrollView style={styles.container}>
      <ImageBackground
        source={Background}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.top}>
          <View style={styles.main}>
            <Text style={styles.start}>Find Your {"\n"}Favourite Food</Text>
            <Pressable>
              <Ionicons
                style={styles.notificationIcon}
                name="notifications-outline"
                color={"#6B50F6"}
                size={30}
              />
            </Pressable>
          </View>
          <View style={styles.searchView}>
          <View style={styles.searchBar}>
            <Pressable style={styles.btnSearch}>
              <Image
                style={styles.searchIcon}
                source={Search}
              />
            </Pressable>
            <TextInput
              style={styles.searchinput}
              placeholder="What do you want to order?"
            ></TextInput>
          </View>
          <View style={styles.filterView}>
            <Ionicons
              name="options"
              color={"#6B50F6"}
              size={30}
              style={styles.options}
            ></Ionicons>
          </View>
          </View>
          <StatusBar style="auto" />
        </View>
        <Banner/>
        <View style={styles.Nearest}>
          <View style={styles.session}>
          <Text style={styles.text}>Nearest Restaurant</Text>
          <Pressable>
          <Text style={styles.viewMore}>View more</Text>
          </Pressable>
          </View>
          <View style={styles.listCard}>

          <Card/>
          <Card/>
          </View>
          {/* <CardList list={listCard}/> */}
        </View>
        {/* <Text>ABC</Text> */}
        <View style={styles.Nearest}>
        <View style={styles.session}>
          <Text style={styles.text}>Popular Menu</Text>
          <Pressable>
          <Text style={styles.viewMore}>View more</Text>
          </Pressable>
          </View>
        <View style={styles.listBox}>

          <CardProduct/>
          <CardProduct/>
          <CardProduct/>
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
    marginBottom:50
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
  notificationIcon:{
    marginRight:30
  },
  searchView:{
    alignItems: "center",
    flexDirection:'row',
    marginTop: 20,
    justifyContent:'space-between'
  },
  searchBar: {
    color: "#fff",
    flexDirection: "row",
    // marginLeft: "-34",
    borderRadius:15,
    // opacity:1,
    alignItems: "center",
    padding:5,
    backgroundColor: "#eae3fc",
    width: '83%',
    height:50,
    
  },
  searchIcon: {
    marginHorizontal:15
  },
  searchinput: {

  },
  viewMore:{
    color: '#9d6afc'
  },
  session:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },

  listCard:{
    padding:10,
    flexDirection: 'row',
    gap:35
  },
  listBox:{
    flexDirection:'column',
    gap:15
  },

  filterView:{
    padding:6,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: "#eae3fc",
    borderRadius: 15,
    width:'15%',
    height:50,
  },
  options: {

  },
  Nearest:{
  marginTop:22
  },
  text:{
    fontWeight:'700',
    marginBottom:12,
    color:"#22242E",
    fontSize: 15
  }
});

