const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name can not be longer than 20 characters'],
        minlength: [1, 'name can not be empty']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);