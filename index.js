const express = require('express')
const app = express()

function loginmiddelware(req ,res ,next){
    console.log('login cheak')
    next()
}


function homepage(req,res,next){
console.log("login scuessfull!!")
res.send('<h1>home page</h1>')
}

app.get('/', loginmiddelware ,homepage)

app.listen(3000)