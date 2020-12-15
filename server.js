
const express = require('express')
const mongoose = require('mongoose')
const usersRoutes = require('./routes')

const app = express()

// ???
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/auth'
const PORT = process.env.PORT || 3001

// ???
mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

// app.use(express.static(`${__dirname}/client/build`))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})
