import { readFile } from "fs"


export const readDataFromFile = async (file) => {
    const p = new Promise((res, rej) => {
        readFile(file,"utf-8" , (err, data) => {
            if (err) rej(err)
            res(data)
        })
    })
    return p
}

async function getData(file) {
    const dataP = await readDataFromFile(file)
    const data = JSON.parse(dataP)
    return data
}

export {
    getData
}