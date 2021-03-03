const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const apiRoute = require('./server/routes/api')
//connect to database
require('./server/database/connection')()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.use('/api', apiRoute)

app.listen(5000, () => console.log('server started at port 5000'))