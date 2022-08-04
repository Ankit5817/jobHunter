const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const router = require('./router/router')
var cors = require("cors");

const app = express()

mongoose.connect('mongodb://localhost:27017/Session')
mongoose.connection.once('open', () => {
    console.log('MongoDB connected')
}).on('error', () => {
    console.log('MongoDB not connected')
})

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors());
app.use('/api', router)


app.listen(3050, (err) => {
    if (!err) {
        console.log('Server running on port 3050')
    } else {
        console.log(err)
    }
})

module.exports = app