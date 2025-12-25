import { getData } from "../services/getData.js"
import { writeData } from "../services/writeData.js"


const validateuser = async (req, res, next) => {
    const users = await getData("./data/users.json")
    const user = users.find(user => user.username === req.headers.username && user.password === req.headers.password)
    if (user) {
        try {
            next()
        } catch (error) {
            res.status().json({error})
        }
    }
    else res.sendStatus(401);
}

const isUsernameNotExsist = async (req, res, next) => {
    const users = await getData("./data/users.json")
    const usernameExsist = users.find(user => user.username === req.body.username)
    if (!usernameExsist) {
        try {
            next()
        } catch (error) {
            console.error(error);
            res.status().json({error})
        }
    }
    else res.sendStatus(409);
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

export {
    validateuser,
    isUsernameNotExsist,
    addUser
}