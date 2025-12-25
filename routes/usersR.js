import express from "express"
import { addUser, isUsernameNotExsist, validateuser } from "../controllers/usersC.js"
import { addEvent } from "../controllers/eventsC.js"

const router = express.Router()

router.get("/", async (req, res) => {})
router.get("/:id", async (req, res) => {})
router.get("/:id/notes", async (req, res) => {})
router.post("/user/register",validateuser, isUsernameNotExsist, addUser)
router.post("/creator/events", validateuser, addEvent)
router.put("/:id", async (req, res) => {})
router.patch("/:id", async (req, res) => {})
router.delete("/:id", async (req, res) => {})


export default router