import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export const AddStaffButton = ({ onPress }) => {
  return (
    <Pressable style={styles.addStaffButton} onPress={onPress}>
      <Text style={styles.shareTitleButtonText}>Add New Staff</Text>
    </Pressable>
  );
};

export const StaffDirectoryButton = ({ onPress }) => {
  return (
    <Pressable style={styles.staffDirectoryButton} onPress={onPress}>
      <Text style={styles.shareTitleButtonText}>Staff Directory</Text>
    </Pressable>
  );
};

export const RegisterStaffButton = ({ onPress }) => {
  return (
    <Pressable style={styles.registerStaffButton} onPress={onPress}>
      <Text style={styles.shareTitleButtonText}>Register Staff</Text>
    </Pressable>
  );
};

export const PageDownButton = ({ onPress }) => {
  return (
    <Pressable style={styles.pageDownButton} onPress={onPress}>
      <Text style={styles.shareTitleButtonText}>↓</Text>
    </Pressable>
  );
};

export const PageUpButton = ({ onPress }) => {
  return (
    <Pressable style={styles.pageUpButton} onPress={onPress}>
      <Text style={styles.shareTitleButtonText}>↑</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  addStaffButton: {
    backgroundColor: '#941a1d',
    paddingVertical: 6,
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 4,
    flex: 1,
  },
  staffDirectoryButton: {
    backgroundColor: '#941a1d',
    paddingVertical: 6,
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 4,
    flex: 1,
  },
  registerStaffButton: {
    backgroundColor: '#941a1d',
    paddingVertical: 6,
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 4,
    flex: 1,
  },
  pageDownButton: {
    backgroundColor: '#941a1d',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 4,
    paddingVertical: 6,
    flex: 0.4,
  },
  pageUpButton: {
    backgroundColor: '#941a1d',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 4,
    paddingVertical: 6,
    flex: 0.4,
  },
  shareTitleButtonText: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Trebuchet MS',
    paddingVertical: 6,
  },
});
