const mongoose = require('mongoose'); //think of require as import and module.exports as export
const Todo = mongoose.model('Todo');

module.exports = {
    create: (req, res) => {
        Todo.create(req.body) //trip to the db
            .then(item => {
                console.log(item);
                res.json(item);
            })
            .catch( err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    findAll: (req, res) => {
        Todo.find()
            .then(todos => {
                console.log(todos);
                res.json(todos);
            })
            .catch( err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    findOne: (req, res) => {
        Todo.findOne({_id: req.params.id})
            .then(todo => {
                console.log(todo);
                res.json(todo);
            })
            .catch( err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    update: (req, res) => {
        Todo.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then(todo => {
                console.log(todo);
                res.json(todo);
            })
            .catch( err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    delete: (req, res) => {
        Todo.deleteOne({_id: req.params.id})
            .then(success => {
                console.log(success);
                res.json(success);
            })
            .catch( err => {
                console.log(err);
                res.status(400).json(err);
            })        
    }
}

