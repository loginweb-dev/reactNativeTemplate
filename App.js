// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

// Views
import SplashScreen from "./src/UI/SplashScreen";
import Login from "./src/Views/Auth/Login/Login";
import Register from "./src/Views/Auth/Register/Register";
import Home from "./src/Views/Home/Home";
import RaceList from "./src/Views/RaceList/RaceList";
import Config from "./src/Views/Config/Config";

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
        <Stack.Screen
          name="TabMenu" component={TabMenu}
          options={{
            title: '',
            headerTransparent: true,
          }}
          independent={true}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function TabMenu() {
  return (
    <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#45A4C0',
          inactiveTintColor: 'gray',
        }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={RaceList}
        options={{
          tabBarLabel: 'Carreras',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Config}
        options={{
          tabBarLabel: 'Configuración',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-settings" color={color} size={26} />
          ),
        }}  
      />
    </Tab.Navigator>
  );
}

export default App;