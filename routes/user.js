const router = require("express").Router();
const { User } = require("../models/user");  // Assuming this import is correct
const Joi = require("joi");
const bcrypt = require('bcrypt');

// login routes
router.post("/", async (req, res) => {
    try {
        const { error } = validate({email: req.body.email, password: req.body.password});
        if (error)
            return res.status(400).send({ message: error.details[0].message });
        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(401).send({ message: "Invalid Email or Password " });
        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        );
        if (!validPassword)
            return res.status(401).send({ message: "Invalid Email or Password" });
        const token = user.generateAuthToken();
        const resData = {token, user}
        res.status(200).send({ data: resData, message: "Logged in successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("email"),
        password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required().label("password"),
    });
    return schema.validate(data);
}

module.exports = router;
