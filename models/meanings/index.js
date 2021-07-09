let mongoose = require('mongoose');

let meaningsSchema = mongoose.Schema({
	word_id             : String, 
	word_type           : String,
    classification      : String, //(esm, fe3l, 7arf, insult, gomla)
	offensive           : Boolean, 
    meaning_text        : String, 
    origin              : [String], 
    example             : [{
        Example_id      : String, 
        Text            : String
    }],
	user_id             : String, 
	date_added          : { type : Date, default: Date.now },
	upvotes             : Number, 
	downvotes           : Number,
	pending_review      : Boolean,
	reported            : Number, 
	rating              : {
        number          : Number, 
        average         : Number, 
        ratings         : [{
            user_id     : String, 
            rating_val  : Number,
        }]
    },
	tags                : [String]

});


module.exports = mongoose.model('meanings', meaningsSchema);