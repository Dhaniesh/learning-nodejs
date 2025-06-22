import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT

// middleware
app.use(express.json())
app.use("/api/notes", notesRoutes)


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server started");
    })
})
