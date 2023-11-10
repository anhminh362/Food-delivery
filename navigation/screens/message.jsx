import React from 'react'
import {
  Pressable,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  
} from "react-native";
const listCard=[
  {name:'Vegan Resto',
  img:'Restaurant1',
  time:'12mins'}
]
export const Message = ({ navigation }) => {
  return (
    <View>
    <Text style={styles.chat_text}>Chat</Text>
    <ScrollView>
    <Pressable onPress={() => navigation.navigate("Mess")}>
    <View style={styles.cart_mess}>
    <View style={{flexDirection:'row', backgroundColor:'#fff', width:380, justifyContent:'space-between',alignItems:'center', padding:10, borderRadius:20,}}
>

    <Image
        style={styles.img}
        source={require(`../../assets/images/image_per5.jpg`)}
        ></Image>
    <View style={{flexDirection:'row', marginRight:30}}>
    <View>
      <Text style={{fontWeight:'bold'}}>Louis Kelly</Text>
      <Text style={{color:'#bdbdc0', marginTop:10}}>Your Order Just Arrived!</Text>
    </View>
    <Text style={{color:'#bdbdc0', marginLeft:20,}}>20:00</Text>
    </View>
    </View>
    </View>
    </Pressable>
    <View style={styles.cart_mess}>
    <View style={{flexDirection:'row', backgroundColor:'#fff', width:380, justifyContent:'space-between',alignItems:'center', padding:10, borderRadius:20,}}>
    <View>
    <Image
        style={styles.img}
        source={require(`../../assets/images/image_per4.jpg`)}
        ></Image>
    </View>
    <View style={{flexDirection:'row', marginRight:30}}>
    <View>
      <Text style={{fontWeight:'bold'}}>Louis Kelly</Text>
      <Text style={{color:'#bdbdc0', marginTop:10}}>Your Order Just Arrived!</Text>
    </View>
    <Text style={{color:'#bdbdc0', marginLeft:20,}}>20:00</Text>
    </View>
    </View>
    </View>
    <View style={styles.cart_mess}>
    <View style={{flexDirection:'row', backgroundColor:'#fff', width:380, justifyContent:'space-between',alignItems:'center', padding:10, borderRadius:20,}}>
    <View>
    <Image
        style={styles.img}
        source={require(`../../assets/images/image_per.jpg`)}
        ></Image>
    </View>
    <View style={{flexDirection:'row', marginRight:30}}>
    <View>
      <Text style={{fontWeight:'bold'}}>Louis Kelly</Text>
      <Text style={{color:'#bdbdc0', marginTop:10}}>Your Order Just Arrived!</Text>
    </View>
    <Text style={{color:'#bdbdc0', marginLeft:20,}}>20:00</Text>
    </View>
    </View>
    </View>
    </ScrollView>
    
  </View>
  );
};
  
const styles = StyleSheet.create({
  img:{
    width:90,
    height:90,
    borderRadius:20,
  }
  ,
  chat_text:{
    marginTop:30,
    marginLeft:20,
    fontSize:25,
    fontWeight:'bold',
  },
  cart_mess:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
  }
})