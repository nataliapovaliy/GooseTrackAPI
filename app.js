const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const { errorHandler } = require('./helpers')

const app = express()
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/user')
app.use('/auth')
app.use('/tasks')
app.use('/columns')

app.use(errorHandler)

module.exports = app