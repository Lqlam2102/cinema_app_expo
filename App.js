import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { KeyboardAvoidingView, Platform } from "react-native";

import Login from "./screen/Login";
import Register from "./screen/Register";
import Splash from "./screen/Splash";

const Stack = createStackNavigator();

export default function App() {
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
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              gestureEnabled: true,
              animationEnabled: true,
              gestureDirection: "horizontal",
            }}
          />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}
