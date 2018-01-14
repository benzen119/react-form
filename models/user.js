const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user Schema & model
const UserSchema = new Schema({
    first_name: {
        type: String,
        required: [true, 'First name field is required'],
        index: true
    },
    last_name: {
        type: String,
        required: [true, 'First name field is required'],
        index: true
    },
    email: {
        type: String,
        required: [true, 'First name field is required'],
        index: true
    },
    date: {
        type: Date,
        required: [true, 'First name field is required'],
        index: true
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;