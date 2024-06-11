import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native';

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

  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => setStaffData(data))
      .catch(error => console.error(error));
  }, []);

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
