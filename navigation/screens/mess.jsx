// import React from 'react'
import {Pressable, Text, View, StyleSheet, Image, TextInput, Button, ScrollView} from "react-native";
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Mess = ({ navigation }) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    console.log('Sending message:', message);
    setMessage('');};
  return (
    <View>
        <View style={styles.cart_mess} >
          <View style={{ flexDirection: 'row', backgroundColor: '#fff', width: 380, justifyContent: 'space-between', alignItems: 'center', padding: 10, borderRadius: 20, }}>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.img}
              source={require(`../../assets/images/image_per5.jpg`)}
            ></Image>
            </Pressable>
            <View style={{ flexDirection: 'row', marginRight: 35 }}>
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Arash Ranjbaran</Text>
                <Text style={{ color: '#bdbdc0', marginTop: 10, fontSize: 15 }}><Ionicons name='ellipse' color={"#6b50f6"} size={9} ></Ionicons> Online</Text>
              </View>
              <View style={{
                width: 50, height: 50, borderRadius: 80, backgroundColor: '#f0edfe', justifyContent: 'center',
                alignItems: 'center', marginLeft:60
              }}>
                <Pressable onPress={() => navigation.navigate("Call")}>
                <Ionicons name='call' color={"#6b50f6"} size={25} ></Ionicons>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <ScrollView >
  <View style={{marginLeft:20}}>
    <Text style={{ fontSize: 17, backgroundColor: '#fafafa', width: 150, padding: 17, borderRadius: 20, marginTop:20,}}>Just to order</Text>
    <Text style={{ fontSize: 17, color: '#fff', backgroundColor: '#6b50f6', width: 320, padding: 17, borderRadius: 20, marginTop:20, marginLeft:50 }}>Okay, for what level of spiciness?</Text>
    <Text style={{ fontSize: 17, backgroundColor: '#fafafa', width: 230, padding: 17, borderRadius: 20,  marginTop:20 }}>Okay, wait a minute 👍</Text>
    <Text style={{ fontSize: 17, color: '#fff', backgroundColor: '#6b50f6', width: 210, padding: 17, borderRadius: 20,  marginTop:20,marginLeft:160 }}>Okay I'm waiting  👍</Text>
    <Text style={{ fontSize: 17, backgroundColor: '#fafafa', width: 150, padding: 17, borderRadius: 20, marginTop:20 }}>Just to order</Text>
    <Text style={{ fontSize: 17, backgroundColor: '#fafafa', width: 150, padding: 17, borderRadius: 20, marginTop:20,}}>Just to order</Text>
    <Text style={{ fontSize: 17, color: '#fff', backgroundColor: '#6b50f6', width: 320, padding: 17, borderRadius: 20, marginTop:20, marginLeft:50 }}>Okay, for what level of spiciness?</Text>
    <Text style={{ fontSize: 17, backgroundColor: '#fafafa', width: 230, padding: 17, borderRadius: 20,  marginTop:20 }}>Okay, wait a minute 👍</Text>
    <Text style={{ fontSize: 17, color: '#fff', backgroundColor: '#6b50f6', width: 210, padding: 17, borderRadius: 20,  marginTop:20,marginLeft:160 }}>Okay I'm waiting  👍</Text>
    <Text style={{ fontSize: 17, backgroundColor: '#fafafa', width: 150, padding: 17, borderRadius: 20, marginTop:20 }}>Just to order</Text>
    
    
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
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 90,
    height: 90,
    borderRadius: 20,
  }
  ,
  cart_mess: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  messageInputContainer: {
    position:'absolute',
    top:0,
    // bottom:0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 690,
    height:70,
    width:420,
    backgroundColor: 'white', // Tùy chỉnh màu nền cho phần nhập tin nhắn
  },
  messageInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    marginRight: 8,
    paddingHorizontal: 8,
    height:40,
  },
})



