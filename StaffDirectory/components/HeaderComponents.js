import React from 'react';
import { Pressable, Image, Text, StyleSheet } from 'react-native';

export const NavigationButton = ({ onPress }) => {
  return (
    <Pressable style={styles.navButton} onPress={onPress}>
      <Image source={require('../assets/ROILogo.jpg')} style={styles.navButtonImage} />
    </Pressable>
  );
};

export const HeaderTitle = ({ title }) => {
  return (
    <Text style={styles.headerText}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  navButton: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  navButtonImage: {
    width: 86,
    height: 44, // Ensure height maintains 2:1 aspect ratio with width
    resizeMode: 'contain', // Image scales correctly
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Trebuchet MS',
    flex: 1,
    textAlign: 'center',
    borderColor: '#000',
    borderWidth: 4,
    paddingVertical: 6,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#595959',
  },
});

