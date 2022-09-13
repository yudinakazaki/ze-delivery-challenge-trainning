const express = require('express')
const partners = require('./partner.routes')

module.exports = (app) => {
  app.use(express.json())

  app.use('/partners', partners)
}
