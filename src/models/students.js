const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique: [true, "email is already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email")
            }
        }
    },
    phone:{
        type:Number,
        min:1000000000,
        max:9999999999,
        required: true,
        unique: true
    },
    address: {
        type: String,  
        required: true
    }

})

// creating new collection
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;