const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 20,
        min: 3,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        trim: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: []

    },
    followings: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3]
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("User", userSchema)