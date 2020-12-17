// Dependencies

const express = require('express')
const mongoose = require('mongoose')

// Setting up the express app
const app = express()
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// Setting up the URI
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/auth'

// Connecting the database
mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

// Starts the server to begin listening
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
  });