import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  FlatList,
  Animated,
  TouchableOpacity,
} from "react-native";
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
      <View
        style={{
          backgroundColor: "#6B50F6",
          justifyContent: "center",
          width: 100,
          height: 117,
          borderRadius: 20,
        }}
      >
        <Animated.Text
          style={{
            color: "white",
            paddingHorizontal: 40,
            fontWeight: "bold",
            transform: [{ scale }],
          }}
        >
          <View style={styles.quantityControls}>
            <TouchableOpacity onPress={onDelete}>
              <Ionicons
                name="trash-outline"
                color={"#fff"}
                size={25}
                style={{ justifyContent: "center" }}
              />
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
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = (number) => {
    if (quantity < number) {
      setQuantity(quantity + 1);
    }
  };

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
      <View style={styles.change}>
        <View style={styles.removeBackground}>
          <Ionicons
            name="remove"
            color={"#6b50f6"}
            size={20}
            onPress={handleDecrease}
          />
        </View>
        <Text style={styles.quantity}>{quantity}</Text>
        <View style={styles.addBackground}>
          <Ionicons
            name="add"
            color={"#fff"}
            size={20}
            onPress={() => handleIncrease(product.quantityInStock)}
          />
        </View>
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
  change: {
    paddingTop: "5%",
    flexDirection: "row",
    paddingRight: 20,
    alignItems: "center",
    gap: 3,
  },
  quantity: {
    fontSize: 16,
    color: "#181818",
    padding: 3,
  },
  removeBackground: {
    backgroundColor: "#e2deff",
    borderRadius: 5,
  },
  addBackground: {
    backgroundColor: "#6b50f6",
    borderRadius: 5,
  },
});

export default CardProduct;
