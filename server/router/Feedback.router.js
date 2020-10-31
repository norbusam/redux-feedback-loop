// express
const express = require('express');
const router = express.Router();
// pool
const pool = require('../modules/pool')
//post routes
router.post('/', (req, res)=>{
    let feedback = req.body;
    console.log(feedback)
    let queryPost = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`
    pool.query(queryPost, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
            .then(()=>{
                res.sendStatus(201);
            }).catch((err)=>{
                console.log('error in POST server', err);
                res.sendStatus(500);
            })
})


module.exports = router;