import {
  Pressable,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ListButton({ list }) {
  return (
    <View style={styles.list}>
      {list.map((item) => (
        <Button name={item} key={item}></Button>
      ))}
    </View>
  );
}

function Button({ name }) {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.button} onPress={() => {
      navigation.navigate("ListRestaurant");
    }}>
      <Text style={styles.buttonText}>{name}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#e4ffef",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 15,
    color: "#6B50F6",
  },
  list: {
    flexDirection: "row",
    gap: 15,
    flexWrap: "wrap",
    paddingVertical: 10,
  },
});
