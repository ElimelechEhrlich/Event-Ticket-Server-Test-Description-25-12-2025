import express from "express"
import usersRouter from "./routes/usersR.js"
import receiptsRouter from "./routes/receiptsR.js"
import eventsRouter from "./routes/eventsR.js"
import { jsonBodyGuard, requestLogger } from "./middlewares/middlewares.js"

const app = express()
const port = 3000

app.use(express.json())

app.use("/users", usersRouter)
app.use("/receipts", receiptsRouter)
app.use("/events", eventsRouter)

app.listen(port, () => {
    console.log(`server runing on http://localhost:${port}`);
})



