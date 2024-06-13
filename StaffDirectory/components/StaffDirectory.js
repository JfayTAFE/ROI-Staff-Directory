import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { NavigationButton, HeaderTitle } from './HeaderComponents';
import { AddStaffButton, PageDownButton, PageUpButton } from './FooterComponents';


// Component to display paged staff list
const StaffList = ({ staffData, navigation, page, entriesPerPage }) => {
  const startIndex = page * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const pagedData = staffData.slice(startIndex, endIndex);

  return (
    <View style={styles.listContainer}>
      {pagedData.map((staff) => (
        <Pressable
          key={staff.id}
          style={styles.staffButton}
          onPress={() => navigation.navigate('StaffDetails', { staffId: staff.id })}
        >
          <Text style={styles.staffButtonText}>{staff.name} details</Text>
        </Pressable>
      ))}
    </View>
  );
};

const StaffDirectory = ({ navigation }) => {
  const [staffData, setStaffData] = useState([]);
  const [page, setPage] = useState(0);
  const entriesPerPage = 8;

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

  const handleNextPage = () => {
    if ((page + 1) * entriesPerPage < staffData.length) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NavigationButton onPress={() => navigation.navigate('Navigation')} />
        <HeaderTitle title="Staff Directory" />
      </View>
      <Text style={styles.pageNumber}>Page {page + 1}</Text>
      <View style={styles.content}>
        <StaffList staffData={staffData} navigation={navigation} page={page} entriesPerPage={entriesPerPage} />
      </View>
      <View style={styles.footer}>
        <PageUpButton onPress={handlePreviousPage} />
        <AddStaffButton onPress={() => navigation.navigate('AddStaff')} />
        <PageDownButton onPress={handleNextPage} />
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#595959',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  staffButton: {
    backgroundColor: '#fff',
    padding: 10,
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
  pageNumber: {
    fontFamily: 'Trebuchet MS',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default StaffDirectory;