const express = require('express')
const app = express()

function loginmiddelware(req ,res ,next){   /// this is the middelware  
    console.log('login cheak')
    next()   /// the is the fuction that tell the code to run the next function 
}


function homepage(req,res,next){
console.log("login scuessfull!!")
res.send('<h1>home page</h1>')
}

app.get('/', loginmiddelware ,homepage)  // there we run the middelware  after the homepage fuction  

app.listen(3000)