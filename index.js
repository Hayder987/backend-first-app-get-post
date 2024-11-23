const express=  require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const users = [
    {id:1, name:"orin", email:"orin@gmail.com"},
    {id:2, name:"mim", email:"mim@gmail.com"},
    {id:3, name:"jony", email:"jony@gmail.com"},
]

app.get("/", (req, res)=>{
    res.send(users)
})

app.post('/users', (req, res)=>{
    console.log('data heat ')
    const newUser = req.body;
     newUser.id = users.length + 1;
     users.push(newUser)
    res.send(users)
})

app.listen(port, ()=>{
    console.log(`Running Port: ${port}`)
})