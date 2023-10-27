import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Footer from './common/footer';
// import Cards from './common/ui/card';
// import Search from './common/ui/search';
// import Detail_Pro from './common/ui/detail_pro';
import Detail_Pro from './common/ui/detail_pro';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="search" component={Search} /> */}
        <Stack.Screen name="detail" component={Detail_Pro} />
        {/* <Stack.Screen name="detail1" component={Detail_Pro1} /> */}
        {/* <Stack.Screen name="User" component={User} /> */}
        {/* <Stack.Screen name="Card" component={Cards} /> */}
        {/* <Stack.Screen name="Inbox" component={Inbox} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
