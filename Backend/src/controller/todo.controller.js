import {Todo} from "../models/todo.models.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const addTodo = asyncHandler(async(req, res) => {
    const {tittle,description} = req.body;

    if (!tittle) {
        throw new ApiError(401, "Tittle is required")
    }

    const todo = await Todo.create({
        tittle,
        description
    })

    if (!todo) {
        throw new ApiError(502,"something went wrong while creating todo")
    }

    return res
    .status(201)
    .json(
        new ApiResponse(
            201,
            "Todo created successfully",
            {todo}
        )
    )
})

const getAllTodo = asyncHandler(async(req,res,next) =>{
    const allTodo = await Todo.find({})

    if (!allTodo) {
        throw new ApiError(408, "Todo is Empty")
    }

    return res.status(201)
    .json(
        new ApiResponse(201,
            "successfully get All Todo",
            {allTodo})
    )
    next()
})

const updateTodo = asyncHandler(async(req,res) => {
    const {id} = req.params
    

    const {tittle, description} =req.body;

    if (!tittle) {
        throw new ApiError(401, "Tittle is required")
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
        { 
            _id:id,
        },
        {
            tittle,
            description,
        },
        {
            new:true
        }
)

if (!updatedTodo) {
    throw new ApiError(501, "something went wrong while updating Todo") 
}

return res
.status(201)
.json(
    new ApiResponse(
        201,
        "successfully updated",
        {updatedTodo}
    )
)
    

})

const deleteTodo = asyncHandler(async(req,res) => {
    const {id} = req.params;
    

    const todo = await Todo.findByIdAndDelete(
            {
                _id:id
            }
    )

    if (!todo) {
       throw new ApiError(501, "something went wrong while deleting Todo") 
    }

    return res.status(204)
    .json(
        new ApiResponse(204,
            "successfully delete",
            {}
        )
    )
})


export {
    addTodo,
    getAllTodo,
    updateTodo,
    deleteTodo,
}