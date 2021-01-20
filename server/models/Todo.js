const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [3, "Todo title must be 3 or more charactors"]
    },
    desc: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

mongoose.model('Todo', TodoSchema);