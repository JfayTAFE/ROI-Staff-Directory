import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationButton = ({ onPress }) => {
  return (
    <Pressable style={styles.navButton} onPress={onPress}>
      <Text style={styles.navButtonText}>R O I</Text>
    </Pressable>
  );
};

const HeaderTitle = () => {
  return (
    <Text style={styles.headerText}>Navigation</Text>
  );
};

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
        <NavigationButton onPress={() => navigation.navigate('Navigation')} />
        <HeaderTitle />
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