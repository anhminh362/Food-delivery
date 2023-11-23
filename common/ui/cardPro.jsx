
import React, { useState } from "react";
import {Image, StyleSheet, View, Text, FlatList, Animated,Image, TouchableOpacity } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import productsData from "../../data/data";

function CardProduct() {

  const [data, setData] = useState(productsData);

  const handleDelete = (id) => {
    const updatedData = data.filter((product) => product.id !== id);
    setData(updatedData);
  };

  const renderRightActions = (progress, dragX, onDelete) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });
    return (
      <View style={{ backgroundColor: "#6B50F6", justifyContent: "center",width:100, height:117, borderRadius:20}}>
        <Animated.Text
          style={{
            color: "white",
            paddingHorizontal:40,
            fontWeight: "bold",
            transform: [{ scale }],
          }}
        >
            <View style={styles.quantityControls}>
        <TouchableOpacity onPress={onDelete}>
          <Ionicons name="trash-outline" color={"#fff"} size={25} style={{justifyContent: "center"}} />
        </TouchableOpacity>
      </View>
        </Animated.Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Swipeable
          renderRightActions={(progress, dragX) =>
            renderRightActions(progress, dragX, () => handleDelete(item.id))
          }
        >
          <CartItem product={item} />
        </Swipeable>
      )}
    />
  );
}


function CartItem({ product, onDelete }) {
  const image = product.image;
  return (
    <View style={styles.card}>
      {/* <Image style={styles.productImage} source={{ uri: product.image }}  /> */}
      <Image
        style={styles.productImage}
        source={require("../../assets/images/banh_xeo.jpg")}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productRestaurant}>{product.restaurant}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  text_popular: {
    paddingTop: "20%",
    paddingLeft: "5%",
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  productDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  productName: {
    fontWeight: "bold",
    color: "#595b62",
  },
  productRestaurant: {
    color: "#e9e5fe",
  },
  productPrice: {
    color: "#6b50f6",
    fontSize: 19,
    fontWeight: "bold",
  },
  quantityControls: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CardProduct;
