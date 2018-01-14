const assert = require('assert');
const User = require('../models/user');
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
//testing post request to DB
describe('Saving record', () => {

    it('Saves a record to the database', (done) => {

        const user = new User({
            first_name: 'Mario',
            last_name: 'Bros',
            email: 'mario@bros.com',
            date: 2018-01-01
        });
        
        setTimeout(done, 300);
        user.save().then( () => {
            assert(!user.isNew);
            done();
        });

    });

});