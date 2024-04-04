const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['user', 'organizer'],
        required: true, // Changed to true without quotes
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this.id }, process.env.JWTPRIVATEKEY,
        { expiresIn: "7d" });
    return token;
}

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().label("name"),
        email: Joi.string().email().required().label("email"),
        password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required().label("password"), // Assuming joi-password-complexity is correctly imported
        role: Joi.string().valid('user', 'organizer').required().label("role"),
    });
    return schema.validate(data);
};

module.exports = { User, validate };
