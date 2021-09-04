const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const PORT = process.env.PORT || 3001;
let db = require('./db/db.json');

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.post('/api/notes', function(req, res){

    console.log("API NOTES POST REQUEST",req.body)
    db.push(req.body);
    res.json(db);
    // get the req.body.id and add one to it eaach time a note is saved
    req.body.id = db.length +1;
    
    })

    app.get('/api/notes', function(req, res){
        res.json(db);
    })






app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
