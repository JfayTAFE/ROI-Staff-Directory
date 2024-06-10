import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import CustomButton from '../components/CustomButton';

const { width, height } = Dimensions.get('window');
const logoWidth = width * 0.9; // 90% of the screen width
const logoHeight = (logoWidth * 300) / 600; // Maintain aspect ratio of the logo

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
    justifyContent: 'flex-start',
    alignItems: 'center',
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
});

export default WelcomeScreen;
