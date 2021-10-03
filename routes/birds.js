const express = require('express')
const router = express.Router();

// To import controllers file
const articleController = require("../controllers/articleController");


// all-articles PATH will be added in '/' automaticly from app.js
//!SHOW ALL
//SHOW ALL, result = Array of objects inside mango DataBase
router.get('/', articleController.article_index_get);

//!ADD TO DB USING POST
//ADD, articls to DB
router.post('/', articleController.article_post);

//!SHOW ONE BYID
//SHOW BYID, result = object insinde mango DataBase (using " req.params.id" and id resived from URL)
router.get('/:id', articleController.article_details_get);

//!DELETE ONE BYID
// redirection need to be as an object 
router.delete("/:id", articleController.article_delete);



// export  .(need to required it in app.js)
module.exports = router