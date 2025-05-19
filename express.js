const express = require('express')
const app = express()
const PORT = 8000

app.use(express.static(__dirname))

app.listen(PORT, ()=>{
    console.log(`sapphic server is running on ${PORT} :3`)
})