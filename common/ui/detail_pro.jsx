import { StyleSheet, View, ImageBackground,Pressable,TextInput,StatusBar, Image, Text, ScrollView} from 'react-native';
// import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function Detail_Pro() {
    const navigation = useNavigation();
  return (
    <ScrollView >
      <ImageBackground
        source={require('../../assets/Photo_Restaurant.png')}
   
      >
        <View>
            <Text>hihi</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

      background: {
        flex: 1,
        resizeMode: "cover",
        height: undefined, 
        width: undefined
        // justifyContent: "center",
      },

});