import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Home from "./navigation/screens/home";
import { Profile } from "./navigation/screens/profile";
import { Message } from "./navigation/screens/message";
import { Market } from "./navigation/screens/market";
import { Mess } from "./navigation/screens/mess";
import { Call } from "./navigation/screens/call";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
// import Icon, { Icons } from './components/Icons';
import Colors from "./constants/Colors";
import ColorScreen from "./navigation/screens/ColorScreen";
import { Foundation, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
// import * as Animatable from 'react-native-animatable';

const Stack = createStackNavigator();
export default function App() {
  const Tab = createBottomTabNavigator();
  // const TabArr= [
  //   { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: ColorScreen, color: Colors.primary, alphaClr: Colors.primaryAlpha },
  // { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'search', component: ColorScreen, color: Colors.green, alphaClr: Colors.greenAlpha },
  // { route: 'Add', label: 'Add New', type: Icons.Feather, icon: 'plus-square', component: ColorScreen, color: Colors.red, alphaClr: Colors.redAlpha },
  // { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: ColorScreen, color: Colors.purple, alphaClr: Colors.purpleAlpha },
  // ]
  const screenOptions = {
    tabBarShowLabel: true,
    headerShown: true,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 70,
      background: "#fff",
    },
  };
  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={screenOptions}
        styles={{ position: "absolute", backgroundColor: "black" }}
      >
        <Tab.Screen
          style={{}}
          name="Home"
          component={Home}
          options={({ route }) => ({
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{}}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 4,
                    }}
                  >
                    <Ionicons
                      style={styles.home_icon}
                      name="home"
                      color={focused ? "#2A01FF" : "#856DFF"}
                      size={30}
                    />
                    {/* <Text
                      style={
                        focused
                          ? styles.tabBarTextFocused
                          : styles.tabBarTextUnfocused
                      }
                    >
                      Home
                    </Text> */}
                  </View>
                </View>
              );
            },
          })}
        ></Tab.Screen>
        <Tab.Screen
          style={{}}
          name="Profile"
          component={Profile}
          options={({ route }) => ({
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{}}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 4,
                    }}
                  >
                    <Ionicons name="person" color={focused ? "#2A01FF" : "#856DFF"} size={30} />
                    {/* <Text
                      style={
                        focused
                          ? styles.tabBarTextFocused
                          : styles.tabBarTextUnfocused
                      }
                    >
                      Home
                    </Text> */}
                  </View>
                </View>
              );
            },
          })}
        ></Tab.Screen>
        <Tab.Screen
          style={{}}
          name="Market"
          component={Market}
          options={({ route }) => ({
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{}}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 4,
                    }}
                  >
                    <Icon name="shopping-cart" size={30}
                      color={focused ? "#2A01FF" : "#856DFF"}
                    />
                    {/* <Text
                      style={
                        focused
                          ? styles.tabBarTextFocused
                          : styles.tabBarTextUnfocused
                      }
                    >
                      Home
                    </Text> */}
                  </View>
                </View>
              );
            },
          })}
        ></Tab.Screen>
        <Tab.Screen
          style={{}}
          name="Message"
          component={Message}
          options={({ route }) => ({
            tabBarLabel: "",
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{}}>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 4,
                    }}
                  >
                    <Ionicons name="chatbubble-ellipses" size={30}
                      color={focused ? "#2A01FF" : "#856DFF"}
                    />
                    {/* <Text
                      style={
                        focused
                          ? styles.tabBarTextFocused
                          : styles.tabBarTextUnfocused
                      }
                    >
                      Home
                    </Text> */}
                  </View>
                </View>
              );
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="Market" component={Market} />
         <Stack.Screen name="Message" component={Message} />
         <Stack.Screen name="Mess" component={Mess} />
         <Stack.Screen name="Call" component={Call} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarIconStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarTextFocused: {
    color: "#2A01FF",
  },
  tabBarTextUnfocused: {
    color: "#6B50F6",
  },
});
