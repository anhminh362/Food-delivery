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
import messageData from "./messagedata";

export const Message = ({ navigation }) => {
  return (
    <Boundary title={"Chat"}>
      <ScrollView>
        <View style={styles.list}>
          {messageData.map((message) => (
            <Pressable onPress={() => navigation.navigate("Mess")}>
              <View style={styles.cart_mess}>
                <View style={styles.box}>
                  <View>
                    <Image
                      style={styles.img}
                      source={message.senderImage}
                    ></Image>
                  </View>
                  <View style={{ flexDirection: "row", marginRight: 30 }}>
                    <View>
                      <Text style={{ fontWeight: "bold" }}>
                        {message.senderName}
                      </Text>
                      <Text style={{ color: "#bdbdc0", marginTop: 10 }}>
                        {message.message}
                      </Text>
                    </View>
                    <Text style={{ color: "#bdbdc0", marginLeft: 20 }}>
                      {message.time}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
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
