let mongoose = require('mongoose');

let wordsSchema = mongoose.Schema({
        word     : String, 
        defined  : Boolean,
});


module.exports = mongoose.model('words', wordsSchema);