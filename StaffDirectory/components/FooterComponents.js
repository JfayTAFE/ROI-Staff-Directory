import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export const AddStaffButton = ({ onPress }) => {
  return (
    <Pressable style={styles.mainFooterButtons} onPress={onPress}>
      <Text style={styles.shareTitleButtonText}>Add New Staff</Text>
    </Pressable>
  );
};

export const StaffDirectoryButton = ({ onPress }) => {
  return (
    <Pressable style={styles.mainFooterButtons} onPress={onPress}>
      <Text style={styles.shareTitleButtonText}>Staff Directory</Text>
    </Pressable>
  );
};

export const RegisterStaffButton = ({ onPress }) => {
  return (
    <Pressable style={styles.mainFooterButtons} onPress={onPress}>
      <Text style={styles.shareTitleButtonText}>Register Staff</Text>
    </Pressable>
  );
};

export const PageDownButton = ({ onPress }) => {
  return (
    <Pressable style={styles.pageUpDownButton} onPress={onPress}>
      <Text style={styles.shareTitleButtonText}>Pg ↓</Text>
    </Pressable>
  );
};

export const PageUpButton = ({ onPress }) => {
  return (
    <Pressable style={styles.pageUpDownButton} onPress={onPress}>
      <Text style={styles.shareTitleButtonText}>Pg ↑</Text>
    </Pressable>
  );
};

export const UpdateStaffButton = ({ onPress }) => {
  return (
    <Pressable style={styles.mainFooterButtons} onPress={onPress}>
      <Text style={styles.shareTitleButtonText}>Update Staff</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  mainFooterButtons: {
    backgroundColor: '#941a1d',
    paddingVertical: 6,
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 4,
    flex: 1,
  },
  pageUpDownButton: {
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
