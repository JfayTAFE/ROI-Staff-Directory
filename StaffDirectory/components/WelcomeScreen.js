// WelcomeScreen.js

import React from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, Text } from 'react-native';

const { width, height } = Dimensions.get('window');
const buttonWidth = width * 0.8; // 80% of the screen width
const logoWidth = width * 0.9; // 90% of the screen width
const logoHeight = (logoWidth * 300) / 600; // Maintain aspect ratio of the logo

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/ROILogo.jpg')} style={styles.logo} />
      <View style={styles.buttonWrapper}>
        <CustomButton
          title="Staff Directory"
          onPress={() => navigation.navigate('Directory')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'center', // Center items horizontally
    backgroundColor: '#262626',
  },
  logo: {
    width: logoWidth,
    height: logoHeight,
    marginVertical: 20, // Vertical margin for spacing
    marginTop: 40, // Adjust the top margin for spacing
  },
  buttonWrapper: { // Control position of button container
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Ensure the button is centered horizontally
  },
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

export default WelcomeScreen;
