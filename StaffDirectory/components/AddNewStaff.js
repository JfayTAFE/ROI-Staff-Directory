// AddNewStaff.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NavigationButton, HeaderTitle } from './HeaderComponents';
import { StaffDirectoryButton, RegisterStaffButton } from './FooterComponents';
import StaffDataFields from './StaffDataFields';

const AddNewStaff = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [addressStreet, setAddressStreet] = useState('');
  const [addressCity, setAddressCity] = useState('');
  const [addressState, setAddressState] = useState('');
  const [addressZip, setAddressZip] = useState('');
  const [addressCountry, setAddressCountry] = useState('');
  const [message, setMessage] = useState('');
  const [dataLength, setDataLength] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      const fetchDataLength = async () => {
        try {
          const response = await fetch('http://10.0.2.2:3000/data');
          const data = await response.json();
          if (isActive) {
            setDataLength(data.length);
          }
        } catch (error) {
          console.error('Error fetching data length', error);
        }
      };

      fetchDataLength();
      return () => {
        isActive = false;
      };
    }, [])
  );

  const handleRegister = async () => {
    if (!name || !phone || !department || !addressStreet || !addressCity || !addressState || !addressZip || !addressCountry) {
      setMessage('All fields are required.');
      return;
    }

    const newStaffMember = {
      id: dataLength + 1,
      name,
      phone,
      department,
      addressStreet,
      addressCity,
      addressState,
      addressZip,
      addressCountry,
    };

    try {
      const response = await fetch('http://10.0.2.2:3000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStaffMember),
      });

      if (response.status === 201) {
        setMessage('New staff member registered successfully!');
        setName('');
        setPhone('');
        setDepartment('');
        setAddressStreet('');
        setAddressCity('');
        setAddressState('');
        setAddressZip('');
        setAddressCountry('');
        setDataLength(dataLength + 1);
      } else {
        setMessage('Failed to register new staff member.');
      }
    } catch (error) {
      setMessage('Error registering new staff member.');
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <NavigationButton onPress={() => navigation.navigate('Navigation')} />
          <HeaderTitle title="Add New Staff Member" />
        </View>
        <Text style={styles.label}>New Staff Member Details</Text>
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
          <RegisterStaffButton onPress={handleRegister} />
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

export default AddNewStaff;
