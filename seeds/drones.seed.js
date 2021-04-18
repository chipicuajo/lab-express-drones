// Iteration #1
require ('../db')

const mongoose = require('mongoose')
//Insert ToDo items to the DB

const Drones = require('../models/drone.model.js')
//create ToDo items to add to our collection

const myDrones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];


Drones.create( myDrones )
.then(()=> mongoose.connection.close(), console.log('yay'))
.catch(()=> console.log('nope'))
