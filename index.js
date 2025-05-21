
//deployment link : https://deployment-basic-express-server.onrender.com
const express = require('express')
const app = express()
require('dotenv').config()

const githubData={
    "id":"kmqo1ybduigr3dugd",
    "email":"anid@dknifnkd.com",
    "name":"ksknosidio"
}
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai or code</h1>')
}
)

app.get('/github',(req,res)=>{
    res.json(githubData);
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
