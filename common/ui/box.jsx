import { StyleSheet, View, ImageBackground, Image, Text} from 'react-native';
import React from 'react';

export default CardProduct = ({ navigation }) => {
  return (

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
      );
}

const styles = StyleSheet.create({
  background: {
    resizeMode: "cover",
  },
  text_popular: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    justifyContent: "space-between",
    height: 90,
    padding: 10,
    backgroundColor:'#fff',
    borderRadius:15
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