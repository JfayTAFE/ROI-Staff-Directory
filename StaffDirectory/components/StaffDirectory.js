import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { NavigationButton, HeaderTitle } from './HeaderComponents';
import { AddStaffButton } from './FooterComponents';


const StaffList = ({ staffData, navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      {staffData.map((staff) => (
        <Pressable
          key={staff.id}
          style={styles.staffButton}
          onPress={() => navigation.navigate('StaffDetails', { staffId: staff.id })}
        >
          <Text style={styles.staffButtonText}>{staff.name} details</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};


const StaffDirectory = ({ navigation }) => {
  const [staffData, setStaffData] = useState([]);

  useFocusEffect( // Runs each time the page is in focus
    React.useCallback(() => {
      let isActive = true; // State updates only happen if the component is still mounted (is active)
  
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:3000/data'); // HTTP request to server, awaits completion of fetch request
          const data = await response.json(); // Parse json data, await completion
          if (isActive) {
            setStaffData(data);
          }
        }
          catch (error) {
            console.error('Error fetching data', error); // Log error to the console
        }
      };
  
      fetchData(); 
  
      return () => {
        isActive = false; // Prevents state updates when component unmounts
      };
    }, []) // [] Tells React the callback function should be created only once
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NavigationButton onPress={() => navigation.navigate('Navigation')} />
        <HeaderTitle title="Staff Directory" />
      </View>
      <StaffList staffData={staffData} navigation={navigation} />
      <AddStaffButton onPress={() => navigation.navigate('AddStaff')} />
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
  scrollView: {
    alignItems: 'center',
  },
  staffButton: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    width: '80%',
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
  },
  staffButtonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Trebuchet MS',
  },
});

export default StaffDirectory;
