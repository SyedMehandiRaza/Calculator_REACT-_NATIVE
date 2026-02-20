import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { calculator_style as styles } from '../styles/calculator_style';

export default function Display({ input, result }) {
  return (
    <View style={styles.displayContainer}>
      <TextInput
        style={styles.input}
        value={input}
        editable={false}
        placeholder="0"
        placeholderTextColor="#999"
      />
      <Text style={styles.operationText}>{result}</Text>
    </View>
  );
}