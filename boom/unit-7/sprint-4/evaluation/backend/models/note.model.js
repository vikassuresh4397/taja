const mongoose=require("mongoose");
// - First Name
// - Last Name
// - Email
// - Department (Select Tag with Tech, Marketing, and Operations as options)
// - Salary



const noteSchema=mongoose.Schema({
    first_name:String,
    last_name:String,
    employee_email:String,
    department:String,
    salary:Number,
    user:String,
    userID:String,
},{
    versionKey:false
})

const NoteModel=mongoose.model("note",noteSchema)

module.exports={
    NoteModel
}