const express = require ("express");
var cors = require('cors')

const app = express();
const dbconfig = require('./db')
const roomsRoute = require('./routes/roomRoute')

app.use('/api/rooms',roomsRoute)
app.use(cors());




const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Node server started using nodemon`));