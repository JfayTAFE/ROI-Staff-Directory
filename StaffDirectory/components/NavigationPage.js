import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavigationButton, HeaderTitle } from './HeaderComponents';


const NavigationItem = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};


const NavigationPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NavigationButton onPress={() => navigation.navigate('Welcome')} />
        <HeaderTitle title="Navigation" />
      </View>
      <View style={styles.buttonWrapper}>
        <NavigationItem title="Welcome / Login" onPress={() => navigation.navigate('Welcome')} />
        <NavigationItem title="Staff Directory" onPress={() => navigation.navigate('Directory')} />
        <NavigationItem title="Add New Staff" onPress={() => navigation.navigate('AddStaff')} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#595959',
  },
  buttonWrapper: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#808080',
    width: '80%',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    borderColor: '#000',
    borderWidth: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Trebuchet MS',
  },
});

export default NavigationPage;
