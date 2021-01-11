// Disregard many of the comments, they are mostly notes to myself

// require('dotenv').config()

const express = require('express')
// const logger = require('morgan')
const mongoose = require('mongoose')
const googleRouter = require('./routes/google')
const cors = require('cors')
const routes = require("./routes");

const app = express()

// setting the URI for the database (default to localhost if it's not defined) & connecting it
/*
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/auth'
*/

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/favorites"
const PORT = process.env.PORT || 3001

mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))
app.use(cors())
// app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//GET method for API
app.get('pathto/API', (req, res) => {
	res.json({message: ""})
})

// calling in routes
/*
app.use('/api', favRoutes)
app.use("/", favRoutes);
app.use("/api/favorite", favRoutes);
*/
app.use(routes);
app.use('/api/google', googleRouter)

// Route for default homepage
app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/path/to/defaulthomepage`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})
