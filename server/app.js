const express = require('express')
const helmet = require('helmet')
// const rateLimit  = require('express-rate-limit') //yet to be used
const bodyParser = require('body-parser')
const cors = require('cors')
const signatureRouter = require('./router/SignatureRoutes')

const app = express()

// cors 
app.use(
cors({
    origin: 'http://localhost:5173',
    credentials: true
})
)
// app.use(cors());

app.use('/uploads',express.static('uploads'))

// parse incoming JSON data
app.use(bodyParser.json())
    
// security packages
app.use(helmet())
    
app.use('', signatureRouter)

module.exports = app

