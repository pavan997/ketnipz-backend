const mongoose = require('mongoose')
const connect = ()=>{
    return mongoose.connect("mongodb+srv://pavanc1997:mDur37JmGtHAbLsp@cluster0.cryyf.mongodb.net/Kepnitz?retryWrites=true&w=majority")
}

module.exports = connect;