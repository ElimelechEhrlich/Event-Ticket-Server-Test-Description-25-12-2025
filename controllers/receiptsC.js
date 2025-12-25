import { getData } from "../services/getData.js"


const buyTickets = async (req, res) => {
    const receipts = await getData("./data/receipts.json")
    const events = await getData("./data/events.json")
    const event = events.find(event => event.eventName.toLowerCase() === req.body.eventName.toLowerCase())
    try {
        if ((req.body.eventName) && (req.body.quantity)) {
            if (event.ticketsForSale - req.body.quantity >= 0) {
                event.ticketsForSale -= req.body.quantity;
                receipts.push({ username: req.body.username, eventName: req.body.eventName ,ticketsBought: req.body.quantity })
                await writeData("./data/receipts.json", JSON.stringify(receipts))
                res.json({ message: "Tickets purchased successfully" })
            }
            else {
                res.json({ message: "The quantity is greater than the number of tickets left for this event." })
            }
        }
        else {
            res.sendStatus(400)
        }
    } catch (error) {
        console.error(error);
        res.status().json({error})
    }
}

export {
    buyTickets
}
