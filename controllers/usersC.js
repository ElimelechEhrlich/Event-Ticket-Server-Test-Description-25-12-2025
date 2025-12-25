import { getData } from "../services/getData.js"
import { writeData } from "../services/writeData.js"


const validateuser = async (req, res, next) => {
    if ((req.body.username) && (req.body.password)) {
        const users = await getData("./data/users.json")       
        const user = users.find(user => user.username === req.body.username && JSON.parse(user.password) === (req.body.password))
        if (user) {
            try {
                next()
            } catch (error) {
                res.status().json({error})
            }
        }
        else {
            res.sendStatus(401);
        }
    }
    else res.sendStatus(400)
}

const isUsernameNotExsist = async (req, res, next) => {
    const users = await getData("./data/users.json")
    const user = users.find(user => user.username === req.body.username)
    if (!user) {
        try {
            next()
        } catch (error) {
            console.error(error);
            res.status().json({error})
        }
    }
    else res.sendStatus(409);
}

const isUsernameExsist = async (req, res, next) => {
    const users = await getData("./data/users.json")
    const user = users.find(user => (user.username === req.params.username || user.username === req.body.username))
    if (user) {
        try {
            next()
        } catch (error) {
            console.error(error);
            res.status().json({error})
        }
    }
    else res.sendStatus(404);
}

const addUser = async (req, res) => {
    const users = await getData("./data/users.json")
    try {
        if ((req.body.username) && (req.body.password)) {
            users.push({username: req.body.username, password: req.body.password})
            await writeData("./data/users.json", JSON.stringify(users))
            res.send({message: "User registered successfully"})
        }
        else res.sendStatus(400)
    } catch (error) {
        console.error(error);
        res.status().json({error})
    }
}

const getPurchasesSummaryByUser = async (req, res) => {
    const receipts = await getData("./data/receipts.json")
    const userReceipts = receipts.filter(receipt => receipt.username === req.params.username)
    if (userReceipts[0]) {
        const totalTicketsBought = userReceipts.reduce((sum, receipt) => {
                sum + receipt.quantity
            },0)
        const events = []
        userReceipts.reduce((events, receipt) => {
            if (!(events.find(event => receipt.eventName === event))) {
                events.push(receipt.eventName)
            }
        }, events)
        res.json({
            totalTicketsBought: totalTicketsBought,
            events: events,
            averageTicketsPerEvent: totalTicketsBought/events.length
        })
    }
    else res.json(0)
}

export {
    validateuser,
    isUsernameNotExsist,
    isUsernameExsist,
    addUser,
    getPurchasesSummaryByUser
}