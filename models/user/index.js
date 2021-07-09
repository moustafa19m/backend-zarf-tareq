let mongoose = require('mongoose');
let bcrypt   = require('bcrypt');

let usersSchema = mongoose.Schema({
        first_name          : String,
        last_name           : String,
        google_id           : String,
        email               : String, 
        username            : String, 
        password            : String,
        age                 : Number,
        profile_pic         : String, 
        native_dialect      : String, 
        familiar_dialects   : [
            {
                dialect    : String, 
                level      : Number,
            }
        ]    
});


usersSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

usersSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users', usersSchema);