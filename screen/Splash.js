import { View, Text } from "react-native";
import React, { useEffect } from "react";
import styled from "styled-components/native";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";

const Container = styled.View`
  flex: 1;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

const Splash = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Register");
      } else {
        navigation.replace("Login");
      }
      return () => {
        unsubscribe();
      };
    });
  }, []);
  return (
    <View>
      <StatusBar style="light" />
      <Container />
    </View>
  );
};

export default Splash;
