// Disregard many of the comments, they are mostly notes to myself

// require('dotenv').config()

const express = require('express')
// const logger = require('morgan')
const mongoose = require('mongoose')
// const usersRoutes = require('./routes')

const app = express()

// setting the URI for the database (default to localhost if it's not defined) & connecting it
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/auth'
const PORT = process.env.PORT || 3001

mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))
// app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//GET method for API
app.get('pathto/API', (req, res) => {
	res.json({message: ""})
})

// 
app.use('/api/users', usersRoutes)

// Route for default homepage
app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/path/to/defaulthomepage`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})
