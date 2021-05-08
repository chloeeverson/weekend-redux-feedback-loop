const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// app.get('/api/summary', (req, res) => {
//     console.log('GET /api/summary');
//     pool.query('SELECT * from "feedback";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /api/summary', error)
//         res.sendStatus(500);
//     });
// })

router.post('/api/feedback', (req, res) => {
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

// app.post('/api/feedback', (req, res) => {
//     console.log('POST /api/feedback');

//     pool.query('SELECT * from "feedback";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /api/summary', error)
//         res.sendStatus(500);
//     });
// })

// app.post('/api/feedback', async (req, res) => {
//     const client = await pool.connect();

//     try {
//         const {
//             feeling,
//             understanding,
//             support,
//             comments,
//         } = req.body;
//         await client.query('BEGIN')
//         const feedbackInsertResults = await client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
//         VALUES ($1, $2, $3, $4)
//         RETURNING id;`, [feeling, understanding, support, comments]);
    

//         }));

//         await client.query('COMMIT')
//         res.sendStatus(201);
//     } catch (error) {
//         await client.query('ROLLBACK')
//         console.log('Error POST /api/feedback', error);
//         res.sendStatus(500);
//     } finally {
//         client.release()
//     }
// });

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});