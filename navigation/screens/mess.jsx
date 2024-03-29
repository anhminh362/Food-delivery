import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Boundary } from "../../common/ui/boundary";
import SendIcon from '../../assets/images/IconSend.png'
export const Mess = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: 1, content: "Just to order", sender: "user" },
    // Các tin nhắn khác nếu có
  ]);

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    const newMessage = { id: messages.length + 1, content: message, sender: "user" };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <Boundary title={"Chat"}>
      <View style={styles.container}>
      <View style={styles.cart_mess}>
        <View style={styles.box}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.img}
              source={require(`../../assets/images/image_per5.jpg`)}
            ></Image>
          </Pressable>

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
              <Pressable onPress={() => navigation.navigate("Call")}>
                <Ionicons name="call" color={"#6b50f6"} size={25}></Ionicons>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <ScrollView style={{ height: 450 }}>
  <View style={styles.chat}>
    {messages.map((msg) => (
      <Text
        key={msg.id}
        style={msg.sender === "user" ? styles.whiteText : styles.blueText}
      >
        {msg.content}
      </Text>
    ))}
  </View>
</ScrollView>
<View style={styles.messageInputContainer}>
  <TextInput
    style={styles.messageInput}
    placeholder="Type your message..."
    value={message}
    onChangeText={(text) => setMessage(text)}
  />
  <Pressable onPress={sendMessage}>
    <Image source={SendIcon} style={styles.icon} />
  </Pressable>
</View>
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
  icon:{
    width: 30,
    height: 30,
  },
  cart_mess: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  container:{
    flexDirection:'column',
    flexWrap:'wrap',
    justifyContent:'space-between',
    flex:1
  },
  messageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 2,
    paddingHorizontal:9,
    backgroundColor:'#fff',
    borderRadius: 15,
    marginTop:15,
    marginHorizontal:15
  },
  messageInput: {
    flex: 1,
    marginRight: 8,
    fontSize: 16,
    color:'#000',
  },
  box: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    gap: 10,
  },
  chat: {
    flexDirection: "column",
    gap: 10,
    marginHorizontal:20
  },
  whiteText: {
    fontSize: 17,
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    maxWidth: "80%",
    padding: 17,
    borderRadius: 20,
  },
  blueText: {
    fontSize: 17,
    color: "#fff",
    backgroundColor: "#6b50f6",
    padding: 17,
    borderRadius: 20,
    maxWidth: "80%",
    alignSelf: "flex-end",
  },
});
