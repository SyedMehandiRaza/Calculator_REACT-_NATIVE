import React from "react";
import { Pressable, Text } from "react-native";
import { calculator_style as styles } from "../styles/calculator_style";

export default function CalculatorButton({ item, onPress, isOperator }) {
  return (
    <Pressable
      style={[
        styles.button,
        { backgroundColor: item === "=" ? "#ec2c2c" : isOperator ? "#6b6969" : "#333" }
        ]}
      onPress={() => onPress(item)}
    >
      <Text style={styles.buttonText}>{item}</Text>
    </Pressable>
  );
}