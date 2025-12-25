import express from "express"
import { getPurchasesSummaryByUser, isUsernameExsist, validateuser } from "../controllers/usersC.js"
import { findEvent } from "../controllers/eventsC.js"
import { buyTickets } from "../controllers/receiptsC.js"

const router = express.Router()

router.get("/:username/summary", getPurchasesSummaryByUser)
router.post("/tickets/buy", isUsernameExsist, validateuser, findEvent, buyTickets)

export default router