import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { NavigationButton, HeaderTitle } from './HeaderComponents';
import { StaffDirectoryButton, RegisterStaffButton } from './FooterComponents';


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

  
  useFocusEffect( // Runs each time the page is in focus
    React.useCallback(() => { 
      let isActive = true; // State updates only happen if the component is still mounted (is active)

      const fetchDataLength = async () => {
        try {
          const response = await fetch('http://localhost:3000/data'); // HTTP request to server, awaits completion of fetch request
          const data = await response.json(); // Parse json data, await completion
          if (isActive) {
            setDataLength(data.length);
          }
        } catch (error) {
          console.error('Error fetching data length', error); // Log error to the console
        }
      };

      fetchDataLength();

      return () => {
        isActive = false; // Prevents state updates when component unmounts
      };
    }, []) // [] Tells React the callback function should be created only once
  );


  // Handle the registration of a new staff member. Needs data in all fields
  const handleRegister = async () => {
    if (!name || !phone || !department || !addressStreet || !addressCity || !addressState || !addressZip || !addressCountry) {
      setMessage('All fields are required.'); // Error message if any field is empty
      return;
    }

    // Details for the new staff member
    const newStaffMember = {
      id: dataLength + 1, // Next id number
      name,
      phone,
      department,
      addressStreet,
      addressCity,
      addressState,
      addressZip,
      addressCountry,
    };

    try { // Run to find any errors
      const response = await fetch('http://localhost:3000/data', {
        method: 'POST', // Run POST method from backend
        headers: {
          'Content-Type': 'application/json', // Tells server request is JSON format
        },
        body: JSON.stringify(newStaffMember), // Send new staff data to array
      });

      if (response.status === 201) {
        setMessage('New staff member registered successfully!'); // Success message
        // Reset all input fields after
        setName('');
        setPhone('');
        setDepartment('');
        setAddressStreet('');
        setAddressCity('');
        setAddressState('');
        setAddressZip('');
        setAddressCountry('');
        setDataLength(dataLength + 1); // Update the data length for the next entry
      }
      else {
        setMessage('Failed to register new staff member.'); // Fail message
      }
    }
    catch (error) { 
      setMessage('Error registering new staff member.'); // Error message
      console.error(error); // Log error to console
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NavigationButton onPress={() => navigation.navigate('Navigation')} />
        <HeaderTitle title="Add New Staff Member" />
      </View>
      <Text style={styles.label}>New Staff Member Details</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name:</Text>
          <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Phone:</Text>
          <TextInput style={styles.input} placeholder="Phone" value={phone} onChangeText={setPhone} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Department:</Text>
          <TextInput style={styles.input} placeholder="Department" value={department} onChangeText={setDepartment} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Address Street:</Text>
          <TextInput style={styles.input} placeholder="Address Street" value={addressStreet} onChangeText={setAddressStreet} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Address City:</Text>
          <TextInput style={styles.input} placeholder="Address City" value={addressCity} onChangeText={setAddressCity} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Address State:</Text>
          <TextInput style={styles.input} placeholder="Address State" value={addressState} onChangeText={setAddressState} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Address ZIP:</Text>
          <TextInput style={styles.input} placeholder="Address ZIP" value={addressZip} onChangeText={setAddressZip} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Address Country:</Text>
          <TextInput style={styles.input} placeholder="Address Country" value={addressCountry} onChangeText={setAddressCountry} />
        </View>
      </View>
      {message ? <Text style={message.includes('successfully') ? styles.successMessage : styles.errorMessage}>{message}</Text> : null}
      <View style={styles.footer}>
        <StaffDirectoryButton onPress={() => navigation.navigate('Directory')} />
        <RegisterStaffButton onPress={handleRegister} />
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
  label: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Trebuchet MS',
    textAlign: 'center',
    marginVertical: 10,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  inputLabel: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Trebuchet MS',
    width: '35%',
    textAlign: 'left',
    marginLeft: '10%',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    width: '70%',
    marginRight: '10%',
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