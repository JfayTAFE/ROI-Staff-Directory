// UpdateStaff.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationButton, HeaderTitle } from './HeaderComponents';
import { StaffDirectoryButton, UpdateStaffButton } from './FooterComponents';
import StaffDataFields from './StaffDataFields';

const UpdateStaff = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { staffId } = route.params;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [addressStreet, setAddressStreet] = useState('');
  const [addressCity, setAddressCity] = useState('');
  const [addressState, setAddressState] = useState('');
  const [addressZip, setAddressZip] = useState('');
  const [addressCountry, setAddressCountry] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await fetch(`http://10.0.2.2:3000/data/${staffId}`);
        const data = await response.json();
        if (data) {
          setName(data.name || '');
          setPhone(data.phone || '');
          setDepartment(data.department ? data.department.toString() : '');
          setAddressStreet(data.addressStreet || '');
          setAddressCity(data.addressCity || '');
          setAddressState(data.addressState || '');
          setAddressZip(data.addressZip || '');
          setAddressCountry(data.addressCountry || '');
        } else {
          setMessage('No data found for this staff member.');
        }
      } catch (error) {
        console.error('Error fetching staff data', error);
        setMessage('Error fetching staff data.');
      }
    };

    fetchStaffData();
  }, [staffId]);

  const handleUpdate = async () => {
    if (!name || !phone || !department || !addressStreet || !addressCity || !addressState || !addressZip || !addressCountry) {
      setMessage('All fields are required.');
      return;
    }

    const updatedStaffMember = {
      id: staffId,
      name,
      phone,
      department: parseInt(department, 10),
      addressStreet,
      addressCity,
      addressState,
      addressZip,
      addressCountry,
    };

    try {
      const response = await fetch(`http://10.0.2.2:3000/data/${staffId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStaffMember),
      });

      if (response.status === 200) {
        setMessage('Staff member updated successfully!');
      } else {
        setMessage('Failed to update staff member.');
      }
    } catch (error) {
      setMessage('Error updating staff member.');
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <NavigationButton onPress={() => navigation.navigate('Navigation')} />
          <HeaderTitle title="Update Staff Member" />
        </View>
        <Text style={styles.label}>Update Staff Member Details</Text>
        <StaffDataFields
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          department={department}
          setDepartment={setDepartment}
          addressStreet={addressStreet}
          setAddressStreet={setAddressStreet}
          addressCity={addressCity}
          setAddressCity={setAddressCity}
          addressState={addressState}
          setAddressState={setAddressState}
          addressZip={addressZip}
          setAddressZip={setAddressZip}
          addressCountry={addressCountry}
          setAddressCountry={setAddressCountry}
        />
        {message ? <Text style={message.includes('successfully') ? styles.successMessage : styles.errorMessage}>{message}</Text> : null}
        <View style={styles.footer}>
          <StaffDirectoryButton onPress={() => navigation.navigate('Directory')} />
          <UpdateStaffButton onPress={handleUpdate} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#595959',
  },
  label: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Trebuchet MS',
    textAlign: 'center',
    marginVertical: 10,
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default UpdateStaff;
