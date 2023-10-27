import { StyleSheet, View, ImageBackground, Image, Text} from 'react-native';
import { Card } from 'react-native-shadow-cards';
import React from 'react';
export default function CardProduct() {

  return (
    // <View>
    <View style={styles.card}>
      <Image style={styles.img1} source={require('../../assets/images/anh1.png')} />
      <View style={styles.name}>
        <Text style={styles.text1}>Herbal Pancake</Text>
        <Text style={styles.text_war}>Warung Herbal</Text>
      </View>
      <View style={styles.name}>
        <Text style={styles.price}>$8</Text>
      </View>
    </View>
  // </View>
  );
}

const styles = StyleSheet.create({
  background: {
    // flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
  },
  text_popular: {
    // paddingTop: '20%',
    // paddingLeft: '5%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    justifyContent: "space-between",
    // marginLeft:'auto',
    // marginRight:'auto',
    height: 90,
    padding: 10,
    backgroundColor:'#fff',
    borderRadius:15
    // margin: 10,
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