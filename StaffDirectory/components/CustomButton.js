import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const buttonWidth = width * 0.7; // 70% of the screen width

// Fades the button when pressed
const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff', // Button background color
    width: buttonWidth,
    paddingVertical: 15, // Add space above/below text
    borderRadius: 5, // Rounds the corners of the button
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10, // Adds space outside the button
  },
  buttonText: {
    color: 'black', // Button text color
    fontSize: 18,
    fontFamily: 'Trebuchet MS', // Button font
  },
});

export default CustomButton;