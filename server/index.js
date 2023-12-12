import express from "express"
// const cors = require("cors")
// const bodyParser = require("body-parser")
const app = express()
app.use(express.json());
const PORT = 8000

let userIdCount = 5

const users = [
    {
        id: 1,
        name: "Akif",
        surname: "Akif"
    },
    {
        id: 2,
        name: "Akif2",
        surname: "Akif2"
    },
    {
        id: 3,
        name: "Akif3",
        surname: "Akif3"
    },
    {
        id: 4,
        name: "Akif4",
        surname: "Akif4"
    }
]


app.get("/about", (req, res) => {
    res.send("About page")
})
app.get("/contact", (req, res) => {
    res.send("Contact page")
})

app.get("/user", (req, res) => {
    res.send(users)
})
app.get("/user/:id", (req, res) => {
    const id = req.params.id
    const User = users.find(x => x.id === +id)
    res.status(201).json({message:"User tapildi"})
    res.send(User)
})

app.post('/user', (req, res) => {
    const newObj = {
        id: userIdCount++,
        name: req.body.name,
        surname: req.body.surname
    }
    users.push(newObj)
    res.send(users)
})

app.put('/user/:id', (req, res) => {
    const id = req.params.id
    const newUserArr = users.filter(x=> x.id !== +id)
    const newObj = {
        id: id,
        name: req.body.name,
        surname: req.body.surname
    }
    newUserArr.push(newObj)
    newUserArr.sort((a,b)=>a.id-b.id)
    res.send(newUserArr)
    res.status(201).json({message:"user found"})
})

app.delete('/user/:id', (req, res) => {
    const id = req.params.id
    const newUserArr = users.filter(x => x.id !== +id)
    res.send(newUserArr)
})


app.listen(PORT, () => {
    console.log('test');
})

