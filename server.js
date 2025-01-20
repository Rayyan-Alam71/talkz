const express = require("express")
const {runApi} = require('./index')
const app = express()
const cors = require("cors")
require('dotenv').config()
app.use(express.json())
app.use(cors())

app.post('/api', async (req, res)=>{
    const {message} = req.body;
    try{
        const result = await runApi(message)
        return res.status(200).send(result)
    }
    catch(e){
        console.log(e)
        return res.status(404).send("an error occured");
    }
})

app.listen(3000, ()=>{
    console.log("server listening on 3000")
})