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
      <View style={styles.container}>
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
          <View style={styles.list}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Cake</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Soup</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Main Course</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Appetizer</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Dessert</Text>
            </Pressable>
          </View>
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
  button:{
    backgroundColor:'#e4ffef',
    paddingVertical:12,
    paddingHorizontal:25,
    borderRadius:15,
    
  },
  text: {
    fontWeight: "700",
    marginBottom: 12,
    color: "#22242E",
    fontSize: 15,
    marginTop: 20,
  },
  list:{
    flexDirection:'row',
    gap:15,
    flexWrap:'wrap'
  },
  buttonText:{
    fontSize:15,
    color:'#6B50F6',
    // fontWeight:'300'
  }
});
