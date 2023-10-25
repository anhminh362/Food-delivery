// import React, { useState, useRef } from 'react';
import { StyleSheet, View, ImageBackground,Pressable,TextInput,StatusBar, Image, Text, ScrollView} from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

export default function Cards() {
    // const navigation = useNavigation();
    return (
      <ScrollView style={styles.background}>
        <ImageBackground
        //   source={require('..//../assets/backdround.png')}
          style={styles.background}
        >
                  <View style={styles.top}>
                      <View style={styles.main}>
                          <Text style={styles.start}>Find Your {'\n'}Favourite Food</Text>
                          <Ionicons name='notifications-outline' color={"#6B50F6"} size={30}></Ionicons>
                      </View>
                      <View>
                          <Pressable style={styles.btn}>
                              <Image style={styles.search}
                                //   source={require('../../assets/Icon_Notif.png')} 
                                  />
                              <TextInput style={styles.searchinput} placeholder='What do you want to order?'></TextInput>
                              <Ionicons name='options' color={"#6B50F6"} size={40} style={styles.options}></Ionicons>
                          </Pressable>
                      </View>
                      <StatusBar style="auto" />
                  </View>
          <Text style={styles.text_popular}>Popular Menu</Text>
          <View>
            <Card style={styles.card}>
              {/* <Image style={styles.img1} source={require('./assets/anh1.jpg')} /> */}
              <View style={styles.name}>
                <Text style={styles.text1}>Herbal Pancake</Text>
                <Text style={styles.text_war}>Warung Herbal</Text>
              </View>
              <View style={styles.name}>
                <Text style={styles.price}>$8</Text>
              </View>
            </Card>
          </View>
          <View>
            <Card style={styles.card}>
              {/* <Image style={styles.img1} source={require('./assets/anh1.jpg')} /> */}
              <View style={styles.name}>
                <Text style={styles.text1}>Herbal Pancake</Text>
                <Text style={styles.text_war}>Warung Herbal</Text>
              </View>
              <View style={styles.name}>
                <Text style={styles.price}>$8</Text>
              </View>
            </Card>
          </View>
          <View>
            <Card style={styles.card}>
              {/* <Image style={styles.img1} source={require('./assets/anh1.jpg')} /> */}
              <View style={styles.name}>
                <Text style={styles.text1}>Herbal Pancake</Text>
                <Text style={styles.text_war}>Warung Herbal</Text>
              </View>
              <View style={styles.name}>
                <Text style={styles.price}>$8</Text>
              </View>
            </Card>
          </View>
          <View>
            <Card style={styles.card}>
              {/* <Image style={styles.img1} source={require('./assets/anh1.jpg')} /> */}
              <View style={styles.name}>
                <Text style={styles.text1}>Herbal Pancake</Text>
                <Text style={styles.text_war}>Warung Herbal</Text>
              </View>
              <View style={styles.name}>
                <Text style={styles.price}>$8</Text>
              </View>
            </Card>
          </View>
          <Card style={styles.cards}>
          <View style={styles.icons}>
            <View style={styles.home}>
          <Text style={styles.home_block}>
          <Ionicons style={styles.home_icon} name='home' color={"#6B50F6"} size={30} onPress={() => navigation.navigate('Cards')}></Ionicons>
          <Text style={styles.text_home}> Home</Text>
          </Text>
          </View>
            <Ionicons name='person' color={"#B5A7FA"} size={30}></Ionicons>
            <Icon name="shopping-cart" size={30} color={"#B5A7FA"}/>
            <Ionicons name='chatbubble-ellipses' color={"#E1DCFD"} size={30}></Ionicons>
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
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft:'auto',
      marginRight:'auto',
      width:'110%',
      height:70,
      backgroundColor:'#fefeff',
      borderRadius:20,
      padding:20,
    },
    find:{
      fontSize:30,
      fontWeight:'bold',
      marginLeft:20,
      width:230
    },
    header:{
      flexDirection: "row",
      marginTop:90,
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
  search: {
      left: 32,
      top: 10,
      zIndex:10
  },
  searchinput: {
      borderRadius: 20,
      paddingTop: 8,
      paddingBottom: 8,
      marginLeft: 1,
      width: 250,
      paddingLeft: 35,
      backgroundColor: '#eae3fc'
  },
  options: {
      marginLeft: 10
  },
    text_type: {
      paddingTop: '10%',
      paddingLeft: '5%',
      fontSize: 18,
      fontWeight: 'bold',
    },
    text_popular: {
      paddingTop: '20%',
      paddingLeft: '5%',
      fontSize: 18,
      fontWeight: 'bold',
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
    text1: {
      fontWeight: 'bold',
      color: '#595b62',
    },
    text_war: {
      color: '#e9e5fe',
    },
    price: {
      color: '#6b50f6',
      fontSize: 25,
      fontWeight: 'bold',
    },
    img1: {
      width: '25%',
      height: '100%',
      borderRadius: 10,
    },
    name:{
      justifyContent:'center',
      paddingRight:20,
    }
  });