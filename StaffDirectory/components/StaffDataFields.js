import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const StaffDataFields = ({
  name,
  setName,
  phone,
  setPhone,
  department,
  setDepartment,
  addressStreet,
  setAddressStreet,
  addressCity,
  setAddressCity,
  addressState,
  setAddressState,
  addressZip,
  setAddressZip,
  addressCountry,
  setAddressCountry
}) => {
  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Name:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Phone:</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Department:</Text>
        <TextInput style={styles.input} value={department} onChangeText={setDepartment} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Address Street:</Text>
        <TextInput style={styles.input} value={addressStreet} onChangeText={setAddressStreet} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Address City:</Text>
        <TextInput style={styles.input} value={addressCity} onChangeText={setAddressCity} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Address State:</Text>
        <TextInput style={styles.input} value={addressState} onChangeText={setAddressState} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Address ZIP:</Text>
        <TextInput style={styles.input} value={addressZip} onChangeText={setAddressZip} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Address Country:</Text>
        <TextInput style={styles.input} value={addressCountry} onChangeText={setAddressCountry} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputLabel: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Trebuchet MS',
    flex: 1,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    flex: 2,
  },
});

export default StaffDataFields;
