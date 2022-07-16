const User = require('../model/user');
const jwt = require ('../middleware/jwt')
const bcrypt = require ('bcrypt.js')


// REGISTER

exports.signUp = async (req, res) => {

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPasword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword
        });
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

// LOGIN

exports.signIn = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json('user not found');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400('Wrong password'));
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
            process.env.JWT_SEC,
            { expiresIn: "5d" }
        )

        const { password,updateAt, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken })
    } catch (err) {
        res.status(500).json(err)
    }
}