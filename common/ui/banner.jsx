import React from "react";
// import { View, StyleSheet } from "react-native";
// interface IProp extends React.ButtonHTMLAttributes<{}> {
//   text: string;
//   button?: React.ReactElement;
//   background?: React.ReactElement;
//   className?: string;
//   color?: string;
//   isLoading?: boolean;
// }
// export default function Button(props: IProp) {
//   const { isLoading, color, className, children, background, disabled, button, ...rest } = props;
//   return (
//     <View style={styles}>

//     </View>
//   );
// }

// const styles= StyleSheet.create({
//   container:{

//   }
// })
// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  Button,
} from "react-native";

export default function Banner({ image }) {
  return (
    <View style={styles.Banner}>
      <ImageBackground
        source={image}
        style={styles.bannerBackground}
        resizeMode="cover"
      >
        <View style={styles.bannerContent}>
          <Text style={styles.text}>Special Deal For {"\n"} October</Text>
          <Pressable style={styles.btnBuynow}>
            <Text style={styles.btnBuynowText}>Buy Now</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Banner: {
    marginTop: 15,
  },
  bannerBackground: {
    paddingTop: "3%",
    paddingBottom: "6%",
  },
  bannerContent: {
    flexDirection: "column",
    paddingLeft: "55%",
    paddingVertical: 20,
    gap: 20,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
    lineHeight: 22.274,
  },
  btnBuynow: {
    borderRadius: 6,
    backgroundColor: "#fff",
    height: 32,
    width: 82,
    alignItems: "center",
    alignContent: "center",
  },
  btnBuynowText: {
    color: "#6B50F6",
    alignContent: "center",
    fontWeight: "700",
    padding: 8,
    fontSize: 10,
  },
});
