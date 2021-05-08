const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/feedback', (req, res) => {
    console.log('Adding feedback', req.body);
    const {
        feeling,
        understanding,
        support,
        comments,
    } = req.body;
    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
    VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [feeling, understanding, support, comments])
      .then( (response) => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('Error adding feedback', error);
        res.sendStatus(500);
      })
  })


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});