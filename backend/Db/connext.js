const mongoose=require('mongoose')

// Function to connect to MONGODB
const connectdb=(url)=>{
    return mongoose.connect(url)
}

module.exports=connectdb