import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default TotalView = ({ navigation }) => {
    return (
      <ImageBackground
      source={require("../../assets/images/PriceInfo.png")}
      style={styles.totalBackground}
    >
      <View style={styles.total}>
        <View style={styles.divide}>
          <View style={styles.attributeText}>
            <Text style={styles.text}>Sub-total</Text>
            <Text style={styles.text}>Delivery Charge</Text>
            <Text style={styles.text}>Discount</Text>
            <Text style={styles.text}>Total</Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.text}>120$</Text>
            <Text style={styles.text}>120$</Text>
            <Text style={styles.text}>120$</Text>
            <Text style={styles.text}>120$</Text>
          </View>
        </View>
        <View style={styles.btn}>
          <Text style={styles.orderBtn}>Place View Order</Text>
        </View>
      </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
  total: {
    flexDirection:'column',
    gap:15
  },
  totalBackground: {
    paddingVertical: "11%",

  },
  divide: {
    flexDirection: "row",
    justifyContent: "center",
  },
  attributeText: {
    color: "#fff",
    fontSize: 14,
  },
  price: {
    color: "#fff",
    fontSize: 14,
    paddingLeft: "40%",
  },
  text: {
    color: "#fff",
    fontSize: 14,
  },
  btn: {
    alignItems: "center",
  },
  orderBtn: {
    backgroundColor: "#fff",
    color: "#6B50F6",
    width: "70%",
    padding: 12,
    borderRadius: 15,
    textAlign: "center",
    fontWeight:'700'
  },
});