import express from "express"
import { addUser, isUsernameNotExsist, validateuser } from "../controllers/usersC.js"
import { addEvent, findEvent } from "../controllers/eventsC.js"
import { buyTickets } from "../controllers/receiptsC.js"

const router = express.Router()

router.get("/", async (req, res) => {})
router.get("/:id", async (req, res) => {})
router.get("/:username/summary", async (req, res) => {})
router.post("/user/register",validateuser, isUsernameNotExsist, addUser)
router.post("/creator/events", validateuser, addEvent)
router.post("/tickets/buy", validateuser, findEvent, buyTickets)
router.put("/:id", async (req, res) => {})
router.patch("/:id", async (req, res) => {})
router.delete("/:id", async (req, res) => {})


export default router