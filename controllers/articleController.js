// To import model & schema for POST rqs need this to link the export model with app.js (bird;js)
const Article = require("../models/articleSchema");

const article_index_get = (req, res) => {

    Article.find()
        .then(result => {
            res.render('index', { mytitle: "Home", arrArticle: result });
        })
        .catch((err) => {
            console.log(err);
        })
};

const article_post = (req, res) => {
    const article = new Article(req.body);

    console.log(req.body);

    article.save()
        .then(result => {
            res.redirect("/all-articles");
        })
        .catch(err => {
            console.log(err);
        });
};

const article_details_get = (req, res) => {
    Article.findById(req.params.id)
        .then(result => {
            res.render('details', { mytitle: "ARTICLE DETAILS", objArticle: result });
        })
        .catch((err) => {
            console.log(err);
        })
};

const article_delete = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then((params) => { res.json({ mylink: "/all-articles" }) })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = {
    article_index_get,
    article_post,
    article_details_get,
    article_delete,
};