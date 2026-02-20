import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { calculator_style as styles } from '../styles/calculator_style';
import { BUTTONS, OPERATORS } from '../constants/Button';
import CalculatorButton from "../components/CalculatorButton"
import Display from "../components/Display"
import { calculateResult } from "../calculations/calculate"


export default function Calculator() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const buttons = BUTTONS;

const handlePress = (item) => {
  if (item === "C") {
    setInput("");
    setResult("");
  } 
  else if (item === "DEL") {
    setInput((prev) => prev.slice(0, -1));
  } 
  else if (item === "=") {
    const finalResult = calculateResult(input);
    setResult(finalResult);
    setInput(finalResult);
  } 
  else {
    setInput((prev) => {
      const lastChar = prev[prev.length - 1];

      if (OPERATORS.includes(lastChar) && OPERATORS.includes(item)) {
        return prev;
      }

      return prev + item;
    });
  }
};


  const renderItem = ({ item }) => {
    return (
      <CalculatorButton
        item={item}
        onPress={handlePress}
        isOperator={OPERATORS.includes(item)}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>

      <Display input={input} result={result} />

      <View>
        <FlatList
          data={buttons}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
        />
      </View>
    </SafeAreaView>
  );
}
