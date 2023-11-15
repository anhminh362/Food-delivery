import {
  View,
  StyleSheet,
  Pressable,
  Text
} from "react-native";
import { Boundary } from "../../common/ui/boundary";
import Banner from "../../common/ui/banner";
import PromoData from "../../data/promoData";
export default Promo = () =>{
  return(
    <Boundary title={'Voucher Promo'}>
      <View style={styles.container}>
        <View style={styles.list}>
          {PromoData.map((item) => (
            <Banner key={item.id} image={item.image} style={styles.banner}/>
          ))}
        </View>
      
      <View style={styles.buttonView}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Check out</Text>
        </Pressable>
      </View>
      </View>
    </Boundary>
  )
}

const styles = StyleSheet.create({
  list:{
    flexDirection:'column',
    gap:10,
    // alignSelf:'flex-start'
  },
  container:{
    flexDirection:'column',
    // flexWrap:'wrap',
    justifyContent:'space-between'
  },
  buttonView: {
    marginTop: 300,
    // alignSelf:'flex-start'
  },
  button: {
    backgroundColor: "#6B50F6",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "700",
    color: "#FEFEFF",
    fontSize: 15,
  },
  banner:{
    paddingVertical:20
  }
});