const router = require('express').Router();
let db =require("../db/db.json")

router.post('/api/notes', function(req, res){

console.log(req.body)
db.push(req.body);


})


module.exports = router;