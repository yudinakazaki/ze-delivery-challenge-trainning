require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

require('./routes')(app)

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost')
  .then(() => {
    console.log('MongoDB connected!')
    app.listen(3000, () => console.log('Server is running on 3000'))
  })
  .catch((error) => console.log(error))

module.exports = app
