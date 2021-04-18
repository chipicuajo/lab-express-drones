const express = require('express');
const router = express.Router();

const Drones = require('../models/drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drones.find()
  .then((allDrones)=> res.render('./drones/list.hbs', {allDrones}))
  .catch((err)=>console.log(err))
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('./drones/create-form.hbs')

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
    //use that information to create a new element in our
    Drones.create({name, propellers, maxSpeed})
    .then((data)=> res.redirect('/drones'))
    .catch(()=> res.render('./drones/create-form.hbs'))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
