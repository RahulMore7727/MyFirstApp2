import React from "react";
// import { useColorScheme,Text } from "react-native";
import {Appearance,Text} from 'react-native';

const OpenLead = () => {

  // const { colorScheme, setColorScheme } = useColorScheme();
  const colorScheme = Appearance.getColorScheme();

  return (
    <Text
      onPress={() => Appearance.setColorScheme(colorScheme === "light" ? "dark" : "light")}
    >
      {`The color scheme is ${colorScheme}`}
    </Text>
  );
}
export default OpenLead;