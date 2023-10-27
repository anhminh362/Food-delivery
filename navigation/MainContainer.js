import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './screens/home';
import { Profile } from './screens/profile';
import { Market } from './screens/market';
import { Message } from './screens/message';
export const MainContainer = () => {
  return (
<NavigationContainer>
   <Tab.Navigator>
    
   </Tab.Navigator>
      {/* <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Market" component={Market} />
      <Tab.Screen name='Message'component={Message}/> */}
    
</NavigationContainer> )
}
