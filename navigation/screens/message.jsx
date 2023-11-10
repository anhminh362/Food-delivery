import React from 'react';
import { Pressable, ImageBackground, Text, View, StyleSheet, Image, ScrollView,} from "react-native";
import messageData from './messagedata';
export const Message = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.chat_text}>Chat</Text>
      <ScrollView>
        {messageData.map(message => (
          <Pressable
            key={message.id}
            onPress={() => navigation.navigate("Mess")}
          >
            <View style={styles.cart_mess}>
              <View
                style={styles.textmess}>
                <Image style={styles.img} source={message.senderImage} />
                <View style={{ flexDirection: 'row', marginRight: 30 }}>
                  <View>
                    <Text style={{ fontWeight: 'bold' }}>
                      {message.senderName}
                    </Text>
                    <Text style={{ color: '#bdbdc0', marginTop: 10 }}>
                      {message.message}
                    </Text>
                  </View>
                  <Text style={{ color: '#bdbdc0', marginLeft: 20 }}>
                    {message.time}
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
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
  chat_text: {
    marginTop: 60,
    marginLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  cart_mess: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textmess: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: 380,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
  }
})