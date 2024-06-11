const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(cors({
    origin: '*',
    methods: 'GET,PUT,POST',
  }));
  

// Data storage for users in staff directory
const storageData = [
    { id: 1, name: "John Smith", phone: "02 9988 2211", department: 1, addressStreet: "1 Code Lane", 
        addressCity: "Javaville", addressState: "NSW", addressZip: "0100", addressCountry: "Australia" },

    { id: 2, name: "Sue White", phone: "03 8899 2255", department: 2, addressStreet: "16 Bit Way", 
        addressCity: "Byte Cove", addressState: "QLD", addressZip: "1101", addressCountry: "Australia" },

    { id: 3, name: "Bob O'Bits", phone: "05 7788 2255", department: 3, addressStreet: "8 Silicon Road", 
        addressCity: "Cloud Hills", addressState: "VIC", addressZip: "1001", addressCountry: "Australia" },

    { id: 4, name: "Mary Blue", phone: "06 4455 9988", department: 2, addressStreet: "4 Processor Boulevard", 
        addressCity: "Appletson", addressState: "NT", addressZip: "1010", addressCountry: "Australia" },

    { id: 5, name: "Mick Green", phone: "02 9988 1122", department: 3, addressStreet: "700 Bandwidth Street", 
        addressCity: "Bufferland", addressState: "NSW", addressZip: "0110", addressCountry: "Australia" }
  ];

// GET method to fetch all staff profiles
// Postman test - passed, diplayed all storageData data
app.get('/data', (request, response) => {
    response.json(storageData);
});

// GET method to fetch a single staff profile by id
// Postman test - passed, diplayed data for ID user from storageData data
app.get('/data/:id', (request, response) => {
    const id = request.params.id;
    const profile = storageData.find(item => item.id === id);

    if (profile) {
        response.json(profile);
    } 
    else {
        response.status(404).json({ message: 'Profile not found' });
    }
});

// POST method to add a new staff profile
// Postman test - passed, added new user with data in the same format as storageData
app.post('/data', (request, response) => {
    const newData = request.body;
    storageData.push(newData);
    response.status(201).json(newData); // Created
});

// PUT method to update an existing staff profile by id
// Postman test - passed, updated user data with new data in the same format as storageData
app.put('/data/:id', (request, response) => {
    const id = request.params.id;
    const updatedData = request.body;
    let itemIndex = storageData.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
        storageData[itemIndex] = updatedData;
        response.json(updatedData);
    } 
    else {
        response.status(404).json({ message: 'Item not found' });
    }
});

// Message to show server is running
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
