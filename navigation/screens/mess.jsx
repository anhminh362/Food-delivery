// import React from 'react'
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
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Boundary } from "../../common/ui/boundary";
const listCard = [
  {
    name: "Vegan Resto",
    img: "Restaurant1",
    time: "12mins",
  },
];

export const Mess = ({ navigation }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log("Sending message:", message);
    setMessage("");
  };
  return (
    <Boundary title={'Chat'}>
   
      <View style={styles.cart_mess}>
        <View
          style={styles.box}
        >
          <Image
            style={styles.img}
            source={require(`../../assets/images/image_per5.jpg`)}
          ></Image>
          <View style={{ flexDirection: "row", marginRight: 35 }}>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Louis Kelly
              </Text>
              <Text style={{ color: "#bdbdc0", marginTop: 10, fontSize: 15 }}>
                <Ionicons name="ellipse" color={"#6b50f6"} size={9}></Ionicons>{" "}
                Online
              </Text>
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 80,
                backgroundColor: "#f0edfe",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 100,
              }}
            >
              <Ionicons name="call" color={"#6b50f6"} size={25}></Ionicons>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={{ height: 500 }}>
        <View style={styles.chat}>
          <Text
            style={styles.whiteText}
          >
            Just to order
          </Text>
          <Text
            style={styles.blueText}
          >
            Okay, for what level of spiciness?
          </Text>
          <Text
            style={styles.whiteText}
          >
            Okay, wait a minute 👍
          </Text>
          <Text
            style={styles.blueText}
          >
            Okay I'm waiting 👍
          </Text>
          <Text
            style={styles.whiteText}
          >
            Just to order
          </Text>
          <Text
            style={styles.whiteText}
          >
            Just to order
          </Text>
          <Text
            style={styles.blueText}
          >
            Okay, for what level of spiciness?
          </Text>
          <Text
            style={styles.whiteText}
          >
            Okay, wait a minute 👍
          </Text>
          <Text
            style={styles.blueText}
          >
            Okay I'm waiting 👍
          </Text>
          <Text
            style={styles.whiteText}
          >
            Just to order
          </Text>
        </View>
      </ScrollView>
      <View style={styles.messageInputContainer}>
        <TextInput
          style={styles.messageInput}
          placeholder="Type your message..."
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </Boundary>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
  cart_mess: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical:20
  },
  messageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginTop: 10,
    backgroundColor: "white", // Tùy chỉnh màu nền cho phần nhập tin nhắn
  },
  messageInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  box: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    gap: 10,
  },
  chat:{
    flexDirection:'column',
    gap:10
  },
  whiteText:{
    fontSize: 17,
    backgroundColor: "#fafafa",
    alignSelf:'flex-start',
    maxWidth:'80%',
    padding: 17,
    borderRadius: 20,
  },
  blueText:{
    fontSize: 17,
    color: "#fff",
    backgroundColor: "#6b50f6",
    padding: 17,
    borderRadius: 20,
    maxWidth:'80%',
    alignSelf:'flex-end'
  }
});