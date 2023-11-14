import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Background from "../../assets/images/background.png";

export default Rating = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.ImageBackground} />
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
        <Ionicons name="create" size={40} color={"#6B50F6"}></Ionicons>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBackground: {
    paddingTop: "20%",
  },
  image: {
    alignItems: "center",
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
    fontSize: 13,
    color: "#d9d9d9",
    textAlign: "center",
  },
  star: {
    fontSize: 25,
    color: "#00FF66",
  },
  starBg: {
    flexDirection: "row",
    marginTop: "5%",
  },
  feedback: {
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#d9d9d9",
    width: "80%",
    borderRadius: 5,
    paddingLeft: 7,
    height: "7%",
    marginTop: "12%",
  },
  feedbackText: {
    padding: "4%",
    color: "#d9d9d9",
  },
  btn: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  submitButton: {
    backgroundColor: "#6B50F6",
    width: 140,
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
  },
  submitText: {
    color: "#fff",
  },
  skipButton: {
    width: 140,
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#6B50F6",
  },
  skipText: {
    color: "#6B50F6",
  },
});
