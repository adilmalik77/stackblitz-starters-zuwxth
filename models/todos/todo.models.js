import mongoose from "mongoose"

const todoSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subTodo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subTodo"
    } // Array od sub-Todos
  ]
},{timestamps: true})

export const todo = mongoose.model("Todo", todoSchema)