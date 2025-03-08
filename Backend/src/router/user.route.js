import {Router} from "express"
import {verifyJWT} from "../middleware/auth.middleware.js"
import { register, login, logout, getProfile } from "../controller/user.controller.js"

const router = Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").post(verifyJWT, logout)
router.route("/getProfile").get(verifyJWT, getProfile)

export default router