import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { KeyboardAvoidingView, Platform, Text } from "react-native";
import Home from "./screen/Home";

import Login from "./screen/Login";
import Register from "./screen/Register";
import Splash from "./screen/Splash";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import * as NavigationBar from "expo-navigation-bar";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  // docs : https://docs.expo.dev/versions/latest/sdk/navigation-bar/
  NavigationBar.setBackgroundColorAsync("black");

  function BottomStackScreen() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#5B5B5B",
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: "black",
            borderTopColor: "black",
            borderBottomColor: "black",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign
                name="home"
                size={24}
                color={color}
                style={{ marginBottom: -10 }}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Coming Soon"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="video-library"
                size={24}
                color={color}
                style={{ marginBottom: -10 }}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Downloads"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign
                name="download"
                size={24}
                color={color}
                style={{ marginBottom: -10 }}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
  }

  const screenOptions = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              gestureEnabled: true,
              animationEnabled: true,
              gestureDirection: "horizontal",
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              gestureEnabled: true,
              animationEnabled: true,
              gestureDirection: "horizontal",
            }}
          />
          <Stack.Screen name="BottomStack" component={BottomStackScreen} />
          <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}
