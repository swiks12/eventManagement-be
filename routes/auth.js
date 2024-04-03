const router = require("express").Router();
const { user, validate } = require("../models/user");  // Assuming this import is correct
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });
        const user = await UserActivation.findOne({ email: req.body.email });  // You should use User, not UserActivation, assuming it's your user model
        if (user)
            return res.status(409).send({ message: "User with email already exists!" });
        const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const { role } = req.body.role;  // This line seems incorrect, you probably want const { role } = req.body;
        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message: "User created Successfully" })
    } catch (error) {
        res.status(500).send({ message: "internal server error" });
    }
});

module.exports = router;
