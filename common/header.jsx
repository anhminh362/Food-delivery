import { StyleSheet, View, ImageBackground,Pressable,TextInput,StatusBar, Image, Text, ScrollView} from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CardProduct() {

  return (
    <ScrollView style={styles.background}>
      <ImageBackground
        source={require('./assets/backdround.png')}
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
                                source={require('./assets/Icon_Notif.png')} />
                            <TextInput style={styles.searchinput} placeholder='What do you want to order?'></TextInput>
                            <Ionicons name='options' color={"#6B50F6"} size={40} style={styles.options}></Ionicons>
                        </Pressable>
                    </View>
                    <StatusBar style="auto" />
                </View>
        <Text style={styles.text_popular}>Popular Menu</Text>
        <View>
          <Card style={styles.card}>
            <Image style={styles.img1} source={require('./assets/anh1.jpg')} />
            <View style={styles.name}>
              <Text style={styles.text1}>Herbal Pancake</Text>
              <Text style={styles.text_war}>Warung Herbal</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.price}>$8</Text>
            </View>
          </Card>
        </View>
        <View>
          <Card style={styles.card}>
            <Image style={styles.img1} source={require('./assets/anh1.jpg')} />
            <View style={styles.name}>
              <Text style={styles.text1}>Herbal Pancake</Text>
              <Text style={styles.text_war}>Warung Herbal</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.price}>$8</Text>
            </View>
          </Card>
        </View>
        <View>
          <Card style={styles.card}>
            <Image style={styles.img1} source={require('./assets/anh1.jpg')} />
            <View style={styles.name}>
              <Text style={styles.text1}>Herbal Pancake</Text>
              <Text style={styles.text_war}>Warung Herbal</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.price}>$8</Text>
            </View>
          </Card>
        </View>
        <View>
          <Card style={styles.card}>
            <Image style={styles.img1} source={require('./assets/anh1.jpg')} />
            <View style={styles.name}>
              <Text style={styles.text1}>Herbal Pancake</Text>
              <Text style={styles.text_war}>Warung Herbal</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.price}>$8</Text>
            </View>
          </Card>
        </View>
        <View>
          <Card style={styles.card}>
            <Image style={styles.img1} source={require('./assets/anh1.jpg')} />
            <View style={styles.name}>
              <Text style={styles.text1}>Herbal Pancake</Text>
              <Text style={styles.text_war}>Warung Herbal</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.price}>$8</Text>
            </View>
          </Card>
        </View>
        <View>
          <Card style={styles.card}>
            <Image style={styles.img1} source={require('./assets/anh1.jpg')} />
            <View style={styles.name}>
              <Text style={styles.text1}>Herbal Pancake</Text>
              <Text style={styles.text_war}>Warung Herbal</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.price}>$8</Text>
            </View>
          </Card>
        </View>
        <View>
          <Card style={styles.card}>
            <Image style={styles.img1} source={require('./assets/anh1.jpg')} />
            <View style={styles.name}>
              <Text style={styles.text1}>Herbal Pancake</Text>
              <Text style={styles.text_war}>Warung Herbal</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.price}>$8</Text>
            </View>
          </Card>
        </View>
        <View>
          <Card style={styles.card}>
            <Image style={styles.img1} source={require('./assets/anh1.jpg')} />
            <View style={styles.name}>
              <Text style={styles.text1}>Herbal Pancake</Text>
              <Text style={styles.text_war}>Warung Herbal</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.price}>$8</Text>
            </View>
          </Card>
        </View>
        <View>
          <Card style={styles.card}>
            <Image style={styles.img1} source={require('./assets/anh1.jpg')} />
            <View style={styles.name}>
              <Text style={styles.text1}>Herbal Pancake</Text>
              <Text style={styles.text_war}>Warung Herbal</Text>
            </View>
            <View style={styles.name}>
              <Text style={styles.price}>$8</Text>
            </View>
          </Card>
        </View>

      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
  },
//   top: {
//     marginTop: 80,
//     marginRight: 2,
// },
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
  text_popular: {
    paddingTop: '20%',
    paddingLeft: '5%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginLeft:'auto',
    marginRight:'auto',
    height: 100,
    padding: 10,
    margin: 10,
  },
  text1: {
    fontWeight: 'bold',
    color: '#595b62',
  },
  text_war: {
    color: '#e9e5fe',
  },
  price: {
    color: '#6b50f6',
    fontSize: 25,
    fontWeight: 'bold',
  },
  img1: {
    width: '25%',
    height: '100%',
    borderRadius: 10,
  },
  name:{
    justifyContent:'center',
    paddingRight:20,
  }
});