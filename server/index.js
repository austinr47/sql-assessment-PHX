const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const axios = require('axios');
const controller = require('../src/controller.js');
const path = require('path')

require('dotenv').config();

const app = express();

app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);

    db.init_tables.user_create_seed().then( response => {
        console.log('User table init');
        db.init_tables.vehicle_create_seed().then( response => {
          console.log('Vehicle table init');
        })
      })
}).catch(error => {
    console.log('error', error);
});

app.get('/api/users', controller.getAllUsers);
app.get('/api/vehicles', controller.getAllVehicles);
app.post('/api/users', controller.createUser);
app.post('/api/vehicles', controller.createVehicle);
app.get('/api/user/:userId/vehiclecount', controller.getUserVehiclesCount);
app.get('/api/user/:userId/vehicle', controller.getUserVehicles);
app.get('/api/vehicle', controller.getVehiclesByEmail);
app.get('/api/newervehiclesbyyear', controller.getNewerVehicles);
app.put('/api/vehicle/:vehicleId/user/:userId', controller.updateOwnerId);
app.delete('/api/user/:userId/vehicle/:vehicleId', controller.deleteOwnerId);
app.delete('/api/vehicle/:vehicleId', controller.deleteVehicle);



const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Am I on?? Yup, on ${PORT}. `); 
} );

