import { getData } from "../services/getData"


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

export {
    validateuser
}