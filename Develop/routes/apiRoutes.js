const path = require('path');
const api = require('express').Router();
const fs = require('fs');
let id = 0;

var newEntry = []

fs.readFile(path.join(__dirname,'../db/db.json'), 'utf8', (err,data) => {
    newEntry = JSON.parse(data)
})

api.post('/notes', (req, res) =>{
    console.log(req.body)
    id++
  // Each note needs unique id when saved. 
    req.body.id = id; 
    newEntry.push(req.body);
    // console.log(newEntry)
  //Add it to db.json. Then return new note to client.
    fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(newEntry));
    res.json(newEntry);
    
});

// api.post('/notes', (req,res) => {
//     console.log(res.body);
//     id++;
//     req.body.id = id;
//     newEntry.push(req.body);

//     fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(newEntry));
// })

module.exports = api