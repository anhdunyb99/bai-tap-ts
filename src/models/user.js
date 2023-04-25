const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    recent_rent_date: {
        type: Date,
        require: true
    },

    books: [
        {
            book: {
                type: Schema.Types.ObjectId,
                ref: "books",
            },
            start_time: {
                type: Date,
                require: true,
            },
            end_time: {
                type: Date,
                require: true,
            },
        },
    ],
})

module.exports = mongoose.model('users', UserSchema)