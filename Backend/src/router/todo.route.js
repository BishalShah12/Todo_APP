import {Router} from "express"
import {
    addTodo,
    getAllTodo,
    updateTodo,
    deleteTodo
} from "../controller/todo.controller.js"
import {verifyJWT} from "../middleware/auth.middleware.js"

const router = Router()

router.route("/addTodo").post(addTodo)
router.route("/getAllTodo").get( getAllTodo)
router.route("/updateTodo/:id").put(updateTodo)
router.route("/deleteTodo/:id").delete(deleteTodo)
 


export default router