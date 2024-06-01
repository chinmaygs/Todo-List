const express=require("express")
const taskController=require('../Controller/task')
const router=express.Router()

// Endpoints for controllers
router
.get('/',taskController.getTask)
.post('/',taskController.createTask)
.patch('/:id',taskController.updateTask)


exports.router=router