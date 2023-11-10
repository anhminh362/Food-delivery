import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import CardProduct from "../../common/ui/cardPro";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Boundary } from "../../common/ui/boundary";
import TotalView from "../../common/ui/totalView";
export default OrderDetail = ({ navigation }) => {

  return (
    <Boundary title={"OrderDetail"}>
        <CardProduct />
      <TotalView/>
    </Boundary>
  );
};

