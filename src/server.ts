import express from "express"
import { router } from "./routes"
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(process.env.PORT || 4003, () => console.log("Server is runnin in port 4003"))