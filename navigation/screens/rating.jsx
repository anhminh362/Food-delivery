import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Background from "../../assets/images/background.png";

export default Rating = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Background}
        style={styles.background}
        resizeMode="cover"
      >
      <Image
        source={require("../../assets/images/rating.jpg")}
        style={styles.image}
      />
      <View style={styles.textRating}>
        <Text style={styles.textRating1}>Thank you!</Text>
        <Text style={styles.textRating2}>Order Completed</Text>
        <Text style={styles.textRating3}>Please rate your last driver</Text>
      </View>
      <View style={styles.starBg}>
        <Ionicons name="star" style={styles.star} />
        <Ionicons name="star" style={styles.star} />
        <Ionicons name="star" style={styles.star} />
        <Ionicons name="star-half" style={styles.star} />
        <Ionicons name="star-outline" style={styles.star} />
      </View>
      <View style={styles.feedback}>
        <Ionicons name="create" size={40} color={"#6B50F6"} style={{marginTop:"2%"}}></Ionicons>
        <Text style={styles.feedbackText}>Leave feedback</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // alignItems: "center",
    // justifyContent: "center",
  },
  background: {
    flex: 1,
  },
  image: {
    marginTop:130,
    alignItems: "center",
    borderRadius:20,
    marginLeft:"auto",
    marginRight:"auto",
    borderRadius:150,
  },
  textRating: {
    textAlign: "center",
    marginTop: "10%",
  },
  textRating1: {
    textAlign: "center",
    fontSize: 30,
  },
  textRating2: {
    textAlign: "center",
    fontSize: 30,
  },
  textRating3: {
    fontSize: 15,
    color: "#d9d9d9",
    textAlign: "center",
    marginTop:15
  },
  star: {
    fontSize: 27,
    color: "#14ae5c",
  },
  starBg: {
    flexDirection: "row",
    marginTop: "7%",
    gap:35,
    marginLeft:"auto",
    marginRight:"auto"

  },
  feedback: {
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    width: "87%",
    borderRadius: 5,
    paddingLeft: 7,
    height: "7%",
    marginTop: "25%",
    marginLeft:"auto",
    marginRight:"auto"
  },
  feedbackText: {
    padding: "5%",
    color: "#d9d9d9",
  },
  btn: {
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    marginTop:"4%"
  },
  submitButton: {
    backgroundColor: "#6B50F6",
    width: 240,
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginRight:-15,
  },
  submitText: {
    color: "#fff",
  },
  skipButton: {
    width: 100,
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#6B50F6",
    marginLeft:-15,
  },
  skipText: {
    color: "#6B50F6",
  },
});
