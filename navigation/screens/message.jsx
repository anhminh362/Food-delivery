import React from "react";
import {
  Pressable,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Boundary } from "../../common/ui/boundary";
export const Message = ({ navigation }) => {
  return (
    <Boundary title={"Chat"}>
      <ScrollView>
        <View style={styles.list}>
          <Pressable onPress={() => navigation.navigate("Mess")}>
            <View style={styles.cart_mess}>
              <View style={styles.box}>
                <Image
                  style={styles.img}
                  source={require(`../../assets/images/image_per5.jpg`)}
                ></Image>
                <View style={{ flexDirection: "row", marginRight: 30 }}>
                  <View>
                    <Text style={{ fontWeight: "bold" }}>Louis Kelly</Text>
                    <Text style={{ color: "#bdbdc0", marginTop: 10 }}>
                      Your Order Just Arrived!
                    </Text>
                  </View>
                  <Text style={{ color: "#bdbdc0", marginLeft: 20 }}>
                    20:00
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
          <View style={styles.cart_mess}>
            <View style={styles.box}>
              <View>
                <Image
                  style={styles.img}
                  source={require(`../../assets/images/image_per4.jpg`)}
                ></Image>
              </View>
              <View style={{ flexDirection: "row", marginRight: 30 }}>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Louis Kelly</Text>
                  <Text style={{ color: "#bdbdc0", marginTop: 10 }}>
                    Your Order Just Arrived!
                  </Text>
                </View>
                <Text style={{ color: "#bdbdc0", marginLeft: 20 }}>20:00</Text>
              </View>
            </View>
          </View>
          <View style={styles.cart_mess}>
            <View style={styles.box}>
              <View>
                <Image
                  style={styles.img}
                  source={require(`../../assets/images/image_per.jpg`)}
                ></Image>
              </View>
              <View style={{ flexDirection: "row", marginRight: 30 }}>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Louis Kelly</Text>
                  <Text style={{ color: "#bdbdc0", marginTop: 10 }}>
                    Your Order Just Arrived!
                  </Text>
                </View>
                <Text style={{ color: "#bdbdc0", marginLeft: 20 }}>20:00</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Boundary>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
  chat_text: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  list: {
    flexDirection: "column",
    gap: 20,
  },
  cart_mess: {
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    gap: 10,
  },
});
