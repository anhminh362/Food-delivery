import { StyleSheet, View, ImageBackground,Pressable,TextInput,StatusBar, Image, Text, ScrollView} from 'react-native';
// import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function Search() {
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.background}>
      <ImageBackground
        source={require('../../assets/backdround.png')}
        style={styles.background}
      >
        <View style={styles.top}>
                    <View style={styles.main}>
                        <Text style={styles.start}>Find Your {'\n'}Favourite Food</Text>
                        <Ionicons name='notifications-outline' color={"#6B50F6"} size={30}></Ionicons>
                    </View>
                    <View>
                        <Pressable style={styles.btn}>
                            <Image style={styles.search}
                                // source={require('./assets/Icon_Notif.png')} 
                                />
                            <TextInput style={styles.searchinput} placeholder='What do you want to order?'></TextInput>
                            <Ionicons name='options' color={"#6B50F6"} size={40} style={styles.options}></Ionicons>
                        </Pressable>
                    </View>
                    <StatusBar style="auto" />
                </View>
        <Text style={styles.text_type}>Types</Text> 
        <View style={styles.types}>
            <View style={styles.block1}>
                <Text style={styles.text_restaurant}>Restaurant</Text>
            </View>
            <View style={styles.block2} >
                <Text style={styles.text_menu}>Menu</Text>
            </View>
        </View>
        <Text style={styles.text_type}>Location</Text> 
        <View style={styles.types}>
            <View style={styles.block1}>
                <Text style={styles.text_restaurant}>1km</Text>
            </View>
            <View style={styles.block2} >
                <Text style={styles.text_menu}>Less 10km</Text>
            </View>
        </View>
        <Text style={styles.text_type}>Food</Text> 
        <View style={styles.types}>
            <View style={styles.block1}>
                <Text style={styles.text_restaurant}>Cake</Text>
            </View>
            <View style={styles.block2} >
                <Text style={styles.text_menu}>Soup</Text>
            </View>
            <View style={styles.block2} >
                <Text style={styles.text_menu}>Course</Text>
            </View>
            
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
main: {
    flexDirection: 'row'
},
background: {
    height: '100%',
    marginTop: 10
},
start: {
    fontSize: 31,
    marginLeft: 25
},
btn: {
    color: '#fff',
    flexDirection: 'row',
    marginLeft: '-34',
    marginTop: 10
},
search: {
    left: 32,
    top: 10,
    zIndex:10
},
searchinput: {
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 1,
    width: 250,
    paddingLeft: 35,
    backgroundColor: '#eae3fc'
},
options: {
    marginLeft: 10
},
  text_type: {
    paddingTop: '10%',
    paddingLeft: '5%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  types:{
    flexDirection:'row',
    marginLeft:30,
    marginTop:30,
  },
  block1:{
    width:120,
    // height:50,
    // paddingBottom:10,
    paddingTop:10,
    backgroundColor:'#e5fff0',
    borderRadius:30,
    
  },
  block2:{
    width:120,
    // height:50,
    paddingBottom:20,
    paddingTop:10,
    backgroundColor:'#e5fff0',
    borderRadius:30,
    marginLeft:30,
  },
  text_restaurant:{
    justifyContent: "space-between",
    alignItems:'center',
    alignContent:'center',
    marginLeft:'auto',
    marginRight:'auto',
  },
  text_menu:{
    justifyContent: "space-between",
    alignItems:'center',
    alignContent:'center',
    marginLeft:'auto',
    marginRight:'auto',
  }
});