import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export const NavigationButton = ({ onPress }) => {
  return (
    <Pressable style={styles.navButton} onPress={onPress}>
      <Text style={styles.navButtonText}>R O I</Text>
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
    backgroundColor: '#941a1d',
    padding: 6,
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 4,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Trebuchet MS',
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
