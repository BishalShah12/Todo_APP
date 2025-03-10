import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors(
    {
        origin: [
            'http://localhost:5173',
            'https://voluble-bublanina-c048f9.netlify.app',
            'https://todo-app-1r4z.vercel.app',
            "https://todo-app-qrne.vercel.app"
        ], 
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }
))
app.options("*", cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("/public"))
app.use(cookieParser())

import userRouter from "./router/user.route.js"
import todoRouter from "./router/todo.route.js"

app.use("/api/v1/users",userRouter)
app.use("/api/v1/todos",todoRouter)
app.get("/", (req,res) => {
    res.send({
        Active:true,
        live:true
    })
})


export {app}