const mongoose = require("mongoose");
const { Schema } = mongoose;

// Task schema
const taskSchema = new Schema({
    Title: { type: String, required: true, unique:true },
    Desc: {type: String},
    Progress: { type: Boolean, default: false },
    Completed: { type: Boolean, default: false },
},
{timestamps:true}
);

// Mongoose models
exports.Task = mongoose.model('Task', taskSchema);
