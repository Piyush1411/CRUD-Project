const mongoose = require('mongoose');

const crudSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
})

const CRUD = mongoose.model('CRUD', crudSchema)

module.exports = CRUD