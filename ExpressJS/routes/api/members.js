const express = require('express');
const uuid = require('uuid');
const router = express.Router();
var path = require ('path');
const members = require('../../Members');

const idFilter = req => member => member.id === parseInt(req.params.id);

//Gets all members
router.get('/', (req, res) => {// Create a route for the api and a get request 
    res.json(members);// Send the members array as a json response
});


//Get single member
router.get('/:id', (req, res) => {// Create a route for the api and a get request
    const found = members.some(member => member.id === parseInt(req.params.id));// Check if the member exists
    if (found) {// If the member exists
        res.json(members.filter(idFilter(req)));// Send the member as a json response
    } else {// If the member doesn't exist
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });// Send a 400 status code and a json response
    }
});

//Create member
router.post('/', (req, res) => {// Create a route for the api and a post request
    const newMember = {// Create a new member object
        ...req.body,
        id: uuid.v4(),// Generate a random id
        // name: req.body.name,// Set the name to the name in the request body
        // email: req.body.email,// Set the email to the email in the request body
        status: 'active'// Set the status to active
    };
    if (!newMember.name || !newMember.email) {// Check if the name or email is not in the request body
        return res.status(400).json({ msg: 'Please include a name and email' });// Send a 400 status code and a json response
    }
    members.push(newMember);// Push the new member to the members array
    //res.json(members);// Send the members array as a json response
    res.redirect('/');// Redirect to the homepage

});

//Update member
router.put('/:id', (req, res) => {// Create a route for the api and a put request
    const found = members.some(idFilter(req));// Check if the member exists
    if (found) {// If the member exists
        const updMember = req.body;// Create a new member object
        members.forEach(member => {// Loop through the members array
            if (member.id === parseInt(req.params.id)) {// Check if the member id is the same as the id in the request params
                member.name = updMember.name ? updMember.name : member.name;// Set the name to the name in the request body or the current name
                member.email = updMember.email ? updMember.email : member.email;// Set the email to the email in the request body or the current email
                res.json({ msg: 'Member updated', member });// Send a json response
            }
        });
    } else {// If the member doesn't exist
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });// Send a 400 status code and a json response
    }
});

//Delete member
router.delete('/:id', (req, res) => {// Create a route for the api and a delete request
    const found = members.some(idFilter(req));// Check if the member exists
    if (found) {// If the member exists
        members: members.filter(member => member.id !== parseInt(req.params.id))
        res.json({ msg: 'Member deleted', members: members.filter(member => member.id !== parseInt(req.params.id)) });// Send a json response
        res.redirect('/');// Redirect to the homepage

    } else {// If the member doesn't exist
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` });// Send a 400 status code and a json response
    }
});



module.exports = router;