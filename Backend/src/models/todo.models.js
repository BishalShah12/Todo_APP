import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({

    tittle:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },

    completed:{
        type:Boolean,
        default:false,
    }

},{timestamps:true})

// todoSchema.methods.isCorrect = function(){
//      if(completed === true) {
//         completed = true
//     } else{
//         completed = false
//     }
// }

export const Todo = mongoose.model("Todo", todoSchema)