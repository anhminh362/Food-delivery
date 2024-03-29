import { View } from "react-native";
import Home from "./navigation/screens/home";
import { Profile } from "./navigation/screens/profile";
import { Message } from "./navigation/screens/message";
import { Mess } from "./navigation/screens/mess";
import Detail_Pro1 from "./common/ui/detail_res";
import Market from "./navigation/screens/market";
import { Call } from "./navigation/screens/call";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";
import Search from "./common/ui/search";
import Rating from "./navigation/screens/rating";
import promo from "./navigation/screens/promo";
import Notifications from "./navigation/screens/noti";
import Detail_Pro from "./common/ui/detail_pro";
import listRes from "./common/ui/listRes";
const Stack = createStackNavigator();
export default function App() {
  const Tab = createBottomTabNavigator();

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
                      name="home"
                      color={focused ? "#2A01FF" : "#856DFF"}
                      size={30}
                    />
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
                    <Ionicons
                      name="person"
                      color={focused ? "#2A01FF" : "#856DFF"}
                      size={30}
                    />
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
                    <Icon
                      name="shopping-cart"
                      size={30}
                      color={focused ? "#2A01FF" : "#856DFF"}
                    />
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
                    <Ionicons
                      name="chatbubble-ellipses"
                      size={30}
                      color={focused ? "#2A01FF" : "#856DFF"}
                    />
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
        <Stack.Screen
          name="Mess"
          component={Mess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Call"
          component={Call}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detail_Pro1" component={Detail_Pro1} />
        <Stack.Screen
          name="Rating"
          component={Rating}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Promo"
          component={promo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Noti"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailRes"
          component={Detail_Pro1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailPro"
          component={Detail_Pro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListRestaurant"
          component={listRes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
