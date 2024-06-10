import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Dimensions } from 'react-native';

const NavigationButton = ({ onPress }) => {
  return (
    <Pressable style={styles.navButton} onPress={onPress}>
      <Text style={styles.navButtonText}>R O I</Text>
    </Pressable>
  );
};

const StaffTitle = () => {
  return (
    <Text style={styles.title}>Staff Directory</Text>
  );
};

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

const AddStaffButton = ({ onPress }) => {
  return (
    <Pressable style={styles.addButton} onPress={onPress}>
      <Text style={styles.addButtonText}>Add New Staff</Text>
    </Pressable>
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
        <NavigationButton onPress={() => {/* Navigation page */}} />
        <StaffTitle />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#595959',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Trebuchet MS',
    paddingVertical: 6,
    borderColor: '#000',
    borderWidth: 4,
    flex: 1,
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
  addButton: {
    backgroundColor: '#941a1d',
    padding: 6,
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Trebuchet MS',
  },
});

export default StaffDirectory;
