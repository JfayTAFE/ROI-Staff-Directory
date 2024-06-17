import React from 'react';
import { Pressable, Image, Text, StyleSheet } from 'react-native';

export const NavigationButton = ({ onPress }) => {
  return (
    <Pressable style={styles.navButton} onPress={onPress}>
      <Image source={require('../assets/ROILogo2.jpg')} style={styles.navButtonImage} />
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
    borderWidth: 4,
    borderColor: '#000',
  },
  navButtonImage: {
    width: 79,
    height: 41,
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

