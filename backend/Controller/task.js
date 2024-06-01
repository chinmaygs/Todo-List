const model=require('../Model/model')
const Task=model.Task

// Function to Create Task
exports.createTask=async(req,res)=>{
    try{
        const result = await Task.create(req.body)
        res.status(201).json(result)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: `${err} Failed to Create Task!` })
    }
};

// Function to Get Task
exports.getTask=async(req,res)=>{
    const id = req.params.id    
    try{
            const result = await Task.find()
            res.json(result)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: `${err} Failed to Get Task!` })
    }
}

// Function to Update Task
exports.updateTask=async(req,res)=>{
    const id = req.params.id
    try{
        const updatedTask = await Task.findOneAndUpdate({_id:id},req.body,{returnDocument:"after"})
        res.status(201).json(updatedTask)
    }catch(err){
        console.log(err)
        res.status(500).json({ message: `${err} Failed to Update Task!` })
    }
}

