const express = require ('express');
const app = express();
const cors = require ('cors');
const morgan = require ('morgan');
const helmet = require ('helmet');
const bodyParser = require ('body-parser');
const key = require ('../config/key')
const authRoute = require ('../routes/auth')
const userRoute = require ('../routes/user')
const postRoute = require ('../routes/post')

app.use(helmet())
app.use (cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/post', userRoute)

module.exports = app;