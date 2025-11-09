//require express module
const express = require('express');
const { testProjet, addBusinessProject, getAllBusinessProjects, getBusinessProjectById, getBusinessProjectByMake, updateBusinessProject, deleteBusinessProject } = require('../controllers/projetcontroller');

//get router
const router = express.Router();

//test route controller
router.get('/test',testProjet);

//add more projet routes here
router.post('/add-business-project', addBusinessProject);

//get all business projects route
router.get('/get-all-business-projects', getAllBusinessProjects);

//get business project by id route
router.get('/get-business-project/:id', getBusinessProjectById);

//get business project by make
router.get('/get-by-make-business-project/:id', getBusinessProjectByMake);

//update business project route (to be implemented)
router.put('/update-business-project/:id', updateBusinessProject);

//delete business project route (to be implemented)
router.delete('/delet-business-project/:id', deleteBusinessProject);

//export the router
module.exports = router;

