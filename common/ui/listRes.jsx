import restaurantData from "../../data/resData";
import { Boundary } from "./boundary";
import ListCard from "./listCard";
import { StyleSheet, View } from "react-native";
export default ListRes = () => {
  return (
    <Boundary title={"Restaurant"}>
      <View style={styles.list}>
        <ListCard list={restaurantData} />
      </View>
    </Boundary>
  );
};
const styles = StyleSheet.create({
  list: {
    padding: 10,
    flexDirection: "row",
    gap: 35,
    flexWrap: "wrap",
  },
});
