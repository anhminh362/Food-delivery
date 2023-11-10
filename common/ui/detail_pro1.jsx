import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { Card } from "react-native-shadow-cards";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Person from "../../assets/images/person.jpg";
import Restaurant from "../../assets/images/Restaurant1.jpg";
import Cake from "../../assets/images/cake.jpg";
import BanhXeo from "../../assets/images/banh_xeo.jpg";
export default function Detail_Pro1() {
  const navigation = useNavigation();
  return (
    <ImageBackground style={styles.image} source={Restaurant}>
      <ScrollView>
        <View style={styles.detail_text}>
          <View style={styles.top_text}>
            <View style={styles.popular}>
              <Text style={styles.popular1}>Popular</Text>
            </View>
            <View style={styles.cicle}>
              <Ionicons
                name="location"
                color={"#6B50F6"}
                size={30}
                style={styles.location}
              ></Ionicons>
            </View>
            <View style={styles.cicle1}>
              <Ionicons
                name="heart"
                color={"#ff4b4b"}
                size={30}
                style={styles.heart}
              ></Ionicons>
            </View>
          </View>
          <Text style={styles.name_pro}>Wijie Bar and Resto</Text>
          <View style={styles.content}>
            <Text style={styles.locationout}>
              <Ionicons
                name="location-outline"
                color={"#6B50F6"}
                size={22}
              ></Ionicons>
              19 km
            </Text>
            <Text style={styles.star}>
              <Ionicons
                name="star-half-sharp"
                color={"#2ecf80"}
                size={22}
              ></Ionicons>
              4.5 ratting
            </Text>
          </View>
          <Text style={styles.text_desc}>
            Most whole Alaskan Red King Crabs get broken down into legs, claws,
            and lump meat. We offer all of these options as well in our online
            shop, but there is nothing like getting the whole . . . .
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 25,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Popular Menu
            </Text>
            <Text
              style={{
                // fontSize:17,
                color: "#b5a7fb",
                marginLeft: 180,
              }}
            >
              View all
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContent}
            >
              <View style={styles.card}>
                <Image style={styles.image_pro} source={BanhXeo} />
                <View style={styles.name}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      marginTop: 10,
                    }}
                  >
                    Spacy fresh crab
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#b3b3b7",
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    $6
                  </Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image style={styles.image_pro} source={BanhXeo} />
                <View style={styles.name}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      marginTop: 10,
                    }}
                  >
                    Spacy fresh crab
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#b3b3b7",
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    $6
                  </Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image style={styles.image_pro} source={BanhXeo} />
                <View style={styles.name}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      marginTop: 10,
                    }}
                  >
                    Spacy fresh crab
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#b3b3b7",
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    $6
                  </Text>
                </View>
              </View>
              <View style={styles.card}>
                <Image style={styles.image_pro} source={BanhXeo} />
                <View style={styles.name}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      marginTop: 10,
                    }}
                  >
                    Spacy fresh crab
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#b3b3b7",
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    $6
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 25,
              marginTop: 20,
            }}
          >
            Testimonials
          </Text>
          <ScrollView>
            <View>
              <Card style={styles.card_pro}>
                <Image style={styles.img_pro} source={Person} />
                <View style={styles.name}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      marginLeft: 10,
                      marginTop: 15,
                    }}
                  >
                    Dianne Russell
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 10,
                      color: "#b3b3b7",
                    }}
                  >
                    12 April 2021
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      marginLeft: 10,
                      width: 190,
                      marginTop: 15,
                    }}
                  >
                    This Is great, So delicious! You Must Here, With Your family
                    . .{" "}
                  </Text>
                </View>
                <View
                  style={{
                    marginRight: 20,
                    marginTop: 15,
                  }}
                >
                  <Text style={styles.ratting}>
                    <Ionicons
                      name="star"
                      color={"#6B50F6"}
                      size={15}
                    ></Ionicons>{" "}
                    5
                  </Text>
                </View>
              </Card>
            </View>
            <View>
              <Card style={styles.card_pro}>
                <Image style={styles.img_pro} source={Person} />
                <View style={styles.name}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      marginLeft: 10,
                      marginTop: 15,
                    }}
                  >
                    Dianne Russell
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 10,
                      color: "#b3b3b7",
                    }}
                  >
                    12 April 2021
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      marginLeft: 10,
                      width: 190,
                      marginTop: 15,
                    }}
                  >
                    This Is great, So delicious! You Must Here, With Your family
                    . .{" "}
                  </Text>
                </View>
                <View
                  style={{
                    marginRight: 20,
                    marginTop: 15,
                  }}
                >
                  <Text style={styles.ratting}>
                    <Ionicons
                      name="star"
                      color={"#6B50F6"}
                      size={15}
                    ></Ionicons>{" "}
                    5
                  </Text>
                </View>
              </Card>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
    // width: 430,
    height: 400,
  },
  top_text: {
    flexDirection: "row",
    margin: 25,
  },
  detail_text: {
    // zIndex: 9999,
    marginTop: 280,
    height: 700,
    backgroundColor: "#f8f8f8",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  cicle: {
    width: 40,
    height: 40,
    backgroundColor: "#f0edfe",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 140,
  },
  cicle1: {
    width: 40,
    height: 40,
    backgroundColor: "#ffeded",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  location: {
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  popular: {
    width: 100,
    height: 40,
    backgroundColor: "#f0edfe",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  popular1: {
    fontSize: 16,
  },
  name_pro: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 25,
  },
  content: {
    marginTop: 10,
    fontSize: 17,
    flexDirection: "row",
    marginLeft: 25,
  },
  locationout: {
    marginRight: 20,
    fontSize: 16,
  },
  star: {
    fontSize: 16,
  },
  text_desc: {
    marginLeft: 25,
    marginTop: 10,
    width: 360,
    fontSize: 15,
  },
  card: {
    backgroundColor: "#fff",
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 25,
    marginTop: 20,
  },
  image_pro: {
    width: 150,
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: -16,
  },
  card_pro: {
    width: 360,
    height: 110,
    flexDirection: "row",
    marginLeft: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  img_pro: {
    width: 80,
    height: 90,
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  ratting: {
    width: 60,
    height: 30,
    backgroundColor: "#f0edfe",
    borderRadius: 20,
    textAlign: "center",
  },
});
