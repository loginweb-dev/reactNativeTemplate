// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Views
import SplashScreen from "./src/UI/SplashScreen";
import Login from "./src/Views/Auth/Login/Login";
import Register from "./src/Views/Auth/Register/Register";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen" component={SplashScreen}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Login" component={Login}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Register" component={Register}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;