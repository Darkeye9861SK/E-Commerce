const mongoose = require('mongoose')

var url = "mongodb+srv://adminnn:kumar9861sambit@cluster0.h5mek2h.mongodb.net/mern-rooms";

mongoose.connect(url,{useUnifiedTopology : true, useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error',() => {
    console.log("MONGO DB connection failed")
})

connection.on('connected',() => {
    console.log("MONGO DB connected sucessfully ")
})

module.exports = mongoose