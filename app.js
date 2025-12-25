import express from "express"
import usersRouter from "./routes/usersR.js"
import { addUser, isUsernameExsist, isUsernameNotExsist, validateuser } from "./controllers/usersC.js"
import { addEvent, isEventNotExsist } from "./controllers/eventsC.js"

const app = express()
const port = 3000

app.use(express.json())

app.use("/users", usersRouter)
app.post("/user/register", isUsernameNotExsist, addUser)
app.post("/creator/events", isUsernameExsist, validateuser, isEventNotExsist, addEvent)

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})



