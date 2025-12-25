import express from "express"
import { getPurchasesSummaryByUser, isUsernameExsist, validateuser } from "../controllers/usersC.js"
import { findEvent } from "../controllers/eventsC.js"
import { buyTickets } from "../controllers/receiptsC.js"

const router = express.Router()

router.get("/", async (req, res) => {})
router.get("/:id", async (req, res) => {})
router.get("/:username/summary", getPurchasesSummaryByUser)
router.post("/tickets/buy", isUsernameExsist, validateuser, findEvent, buyTickets)
router.put("/:id", async (req, res) => {})
router.patch("/:id", async (req, res) => {})
router.delete("/:id", async (req, res) => {})


export default router