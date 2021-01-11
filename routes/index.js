// Disregard many of the comments, they are mostly notes to myself
const express = require('express')
// import controller
// import something to do with auth here. in the secure2 app that we covered in class, it looks like:
// const verifyToken = require('../auth').verifyToken, but I don't understand this enough yet to include it in the code

const importControllerVariableName = new express.Router()

// code for all these requests will be shown in index.js of controller folder
// GET request: this one specifically shows the users that this app has
importControllerVariableName.route('/').get(usersCtrl.index)

// POST request: this one specifically adds a new user (sign up)
importControllerVariableName.route('/').post(usersCtrl.create)

// this route is the path that gets executed when a user logs in, but I don't understand it enough to apply it yet
// importControllerVariableName.post('/authenticate', usersCtrl.authenticate)

// ??? this basically grabs the token coming in and executes verifyToken but it's still super confusing. somehow this is
// a firewall
// importControllerVariableName.use(verifyToken)

// GET request that tests whether the firewall above is working, since we are now on the protected side of the firewall
importControllerVariableName.route('/test').get((req, res) => {    
    res.json({'message': 'Life is Good'})
})

///=====import favorite routes
const router = require("express").Router();
const apiRoutes = require("./api");
router.use("/", favRoutes);
router.use("/api/favorite", apiRoutes);

module.exports = importControllerVariableName;
module.exports = router;