// import React, { useState, useRef } from 'react';
import { StyleSheet, View, ImageBackground,Pressable,TextInput,StatusBar, Image, Text, ScrollView} from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();
    return (
      
      <ScrollView style={styles.background}>
        <ImageBackground
          // source={require('../../assets/backdround.png')}
          style={styles.background}
        >
          <Card style={styles.cards}>
          <View style={styles.icons}>
            <View style={styles.home}>
          <Text style={styles.home_block}>
          <Ionicons style={styles.home_icon} name='home' color={"#6B50F6"} size={30} onPress={() => navigation.navigate('Home')}></Ionicons>
          <Text style={styles.text_home}> Home</Text>
          </Text>
          </View>
            <Ionicons name='person' color={"#B5A7FA"} size={30} onPress={() => navigation.navigate('User')}></Ionicons>
            <Icon name="shopping-cart" size={30} color={"#B5A7FA"} onPress={() => navigation.navigate('Card')}/>
            <Ionicons name='chatbubble-ellipses' color={"#E1DCFD"} size={30} onPress={() => navigation.navigate('Inbox')}></Ionicons>
          </View>
          </Card>
        </ImageBackground>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      resizeMode: "cover",
      // justifyContent: "center",
    },
    icons: {
      flex:1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft:'auto',
      marginRight:'auto',
      width:'110%',
      height:70,
      backgroundColor:'#fefeff',
      padding:20,
    },
    home:{
      flexDirection: "row",
      backgroundColor:'#F0EDFE', 
      width:110,
      height:40,
      borderRadius:10,
      marginTop:-8,
  
    },
    home_block:{
      marginLeft:'auto',
      marginRight:'auto',
    },
    text_home:{
      color:'#6B50F6',
  
    },
    start: {
      fontSize: 31,
      marginLeft: 25
  },
  btn: {
      color: '#fff',
      flexDirection: 'row',
      marginLeft: '-34',
      marginTop: 10
  },
    card: {
      flexDirection: 'row',
      justifyContent: "space-between",
      marginLeft:'auto',
      marginRight:'auto',
      height: 100,
      padding: 10,
      margin: 10,
    },
  });