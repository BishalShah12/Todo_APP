import {Router} from "express"
import {
    addTodo,
    getAllTodo,
    updateTodo,
    deleteTodo
} from "../controller/todo.controller.js"
import {verifyJWT} from "../middleware/auth.middleware.js"

const router = Router()

router.route("/addTodo").post(verifyJWT,addTodo)
router.route("/getAllTodo").get(verifyJWT, getAllTodo)
router.route("/updateTodo/:id").put(verifyJWT, updateTodo)
router.route("/deleteTodo/:id").delete(verifyJWT,deleteTodo)
 


export default router