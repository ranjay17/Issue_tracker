// connected to database
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://sranjay15:rrRR1234@cluster0.e5jjfpe.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function(){
    console.log("Connected to Database :: mongodb");
});

module.exports = db;