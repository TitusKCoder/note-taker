const path = require('path');
const api = require('express').Router();
const fs = require('fs');
// let id = 0; this didnt work 

var newEntry = []

fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8', (err,data) => {
    newEntry = JSON.parse(data)
})

api.get('/notes', (req, res) => {
    res.json(newEntry)
});


api.post('/notes', (req, res) =>{
    console.log(req.body)
    //id++
  // Each note needs unique id when saved. 
    req.body.id = Math.floor((1+ Math.random())* 0x100000); 
    newEntry.push(req.body);
    // console.log(newEntry)
  //Add it to db.json. Then return new note to client.
    fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(newEntry));
    res.json(newEntry);
    
});


module.exports = api;