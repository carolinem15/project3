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

importControllerVariableName.post('/authenticate', usersCtrl.authenticate)

importControllerVariableName.use(verifyToken)

importControllerVariableName.route('/test').get((req, res) => {    
    res.json({'message': 'Life is Good'})
})

importControllerVariableName.route('/secret').get(usersCtrl.show)

importControllerVariableName.route('/:id').patch(usersCtrl.update)

importControllerVariableName.route('/:id').delete(usersCtrl.destroy)

module.exports = importControllerVariableName