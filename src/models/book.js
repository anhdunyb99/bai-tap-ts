const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BookSchema = new Schema({
    name : {
        type : String,
        require : true ,
    },
    price : {
        type : Number,
        require : true
    },
    category : {
        type : String,
        enum : ['action', 'love', 'knowledge', 'detective'],
        require : true
    },
    description : {
        type : String,
        require : true,
    },
    outdated : {
        type : Date,
        require : true
    },
    
    user : [{
        type : Schema.Types.ObjectId,
        ref : 'users'
    }]
})

module.exports = mongoose.model('books',BookSchema)