import React from 'react';
import { View, StyleSheet, Image, Dimensions, Pressable, Text } from 'react-native';

const { width } = Dimensions.get('window');
const logoWidth = width * 0.9; // 90% of the screen width


const StaffDirectoryButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};


const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/ROILogo.jpg')} style={styles.logo} resizeMode="contain" />
      <View style={styles.buttonWrapper}>
        <StaffDirectoryButton
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
    height: logoWidth / 2, // Maintain aspect ratio
    marginVertical: 20, // Vertical margin for spacing
    marginTop: 40, // Top margin for spacing
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Ensure the button is centered horizontally
  },
  button: {
    backgroundColor: '#ffffff', // Button background color
    width: '80%',
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
