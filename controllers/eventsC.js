import { getData } from "../services/getData.js"
import { writeData } from "../services/writeData.js"


const addEvent = async (req, res) => {
    const events = await getData("./data/events.json")
    try {
        if ((req.body.eventName) && (req.body.ticketsForSale)) {
            events.push({eventName: req.body.eventName ,ticketsForSale: req.body.ticketsForSale, username: req.headers.username ,password: req.headers.password})
            await writeData("./data/events.json", JSON.stringify(events))
            res.send({message: "Event created successfully"})
        }
        else res.sendStatus(400)
    } catch (error) {
        console.error(error);
        res.status().json({error})
    }
}

const findEvent = async (req, res, next) => {
    const events = await getData("./data/events.json")
    const event = events.find(event => event.eventName === req.body.eventName)
    if (event) {
        next()
    }
    else {
        res.json({ message: "There is no event with this name." })
    }
}

export {
    addEvent,
    findEvent
}

