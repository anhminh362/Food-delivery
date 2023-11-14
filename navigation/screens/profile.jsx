import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
} from "react-native";
import profileData from "./profiledata";
import Ionicons from "react-native-vector-icons/Ionicons";
export const Profile = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.image}
      source={require(`../../assets/images/image_per5.jpg`)}
    >
      <ScrollView>
        <View style={styles.detail_text}>
          <View style={styles.top_text}>
            <View style={styles.popular}>
              <Text style={styles.popular1}>Member Gold</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.name_pro}>Arash Ranjbaran</Text>
            <Ionicons
              name="pencil"
              color={"#6B50F6"}
              size={22}
              style={{ marginTop: 7, marginLeft: 130 }}
            ></Ionicons>
          </View>
          <Text style={{ color: "#D2D2D4", marginLeft: 25, fontSize: 17 }}>
            awdesign.ar@gmail.com
          </Text>
          <View style={styles.voucher}>
            <Image
              style={styles.image_voucher}
              source={require(`../../assets/images/voucher1.jpg`)}
            />
            <Text style={{ fontSize: 14, marginTop: 15, marginLeft: 30 }}>
              You Have 3 Voucher
            </Text>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 25,
              marginTop: 20,
            }}
          >
            Favorite
          </Text>
          <ScrollView>
            {profileData.map((item) => (
              <View key={item.id} style={styles.cart_mess}>
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#fff",
                    width: 380,
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 10,
                    borderRadius: 20,
                  }}
                >
                  <View>
                    <Image style={styles.img} source={item.image} />
                  </View>
                  <View style={{ marginRight: 40 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                      {item.name}
                    </Text>
                    <Text style={{ color: "#bdbdc0", marginTop: 5 }}>
                      {item.restaurant}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#6b50f6",
                      }}
                    >
                      ${item.price}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#fff",
                      marginTop: -10,
                      padding: 10,
                      backgroundColor: "#6b50f6",
                      borderRadius: 20,
                      marginRight: 25,
                    }}
                  >
                    Buy Again
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 400,
  },
  top_text: {
    flexDirection: "row",
    margin: 25,
  },
  name_pro: {
    marginLeft: 25,
    fontSize: 23,
    fontWeight: "bold",
  },
  detail_text: {
    // zIndex: 9999,
    marginTop: 320,
    height: 850,
    backgroundColor: "#f8f8f8",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  popular: {
    width: 150,
    height: 45,
    backgroundColor: "#e5fff0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  popular1: {
    fontSize: 16,
    color: "#7a66f5",
  },
  voucher: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 15,
    padding: 10,
    width: 380,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  image_voucher: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  chat_text: {
    marginTop: 100,
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  cart_mess: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
