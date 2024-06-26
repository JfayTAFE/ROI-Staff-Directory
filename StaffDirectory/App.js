import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './components/WelcomeScreen';
import StaffDirectory from './components/StaffDirectory';
import NavigationPage from './components/NavigationPage';
import AddNewStaff from './components/AddNewStaff';
import UpdateStaff from './components/UpdateStaff';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Directory" component={StaffDirectory} options={{ headerShown: false }} />
        <Stack.Screen name="Navigation" component={NavigationPage} options={{ headerShown: false }} />
        <Stack.Screen name="AddStaff" component={AddNewStaff} options={{ headerShown: false }} />
        <Stack.Screen name="UpdateStaff" component={UpdateStaff} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
