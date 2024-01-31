const mongoose=require('mongoose')

const connectDB=async ()=>{
    try {
        await mongoose.connect("mongodb+srv://shayrabin:4kcI5qKSfZN119Yu@cluster0.9zrf14y.mongodb.net/?retryWrites=true&w=majority",{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("MongoDB connect")
    } catch (error) {
        console.log("MongoDB FAIL",error)
        
    }
}

module.exports=connectDB