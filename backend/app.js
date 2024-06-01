const connectDB = require("./Db/connext")
const cors=require('cors')
const express=require("express")
const taskrouter=require("./Router/task")
const Port = 3000;
require('dotenv').config()

const app=express()

app.use(cors())
app.use(express.json())

// API Routes
app.use('/api/Task', taskrouter.router)


// Connect to DB & Starting an Server
const start=async ()=>{
    try{
        await connectDB(process.env.DB_URL)
        console.log("DB Connected")
        app.listen(Port,console.log("Server started!"))
    }
    catch(error){
        console.log('error')
    }
}
start()