const express = require('express')
const app = express()
const port = 3000;
// for ejs (engine template)
app.set('view engine', 'ejs');
// for link public folder where is all imgs css js fille.. إتعامل ويك أنك بداخل الــ public فولدر
app.use(express.static('public'));
// for POST rqs
app.use(express.urlencoded({ extended: true }));

// To import routes file
const birds = require("./routes/birds");



//CNX, do connect .then start, .catch for error
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://dbwalid:porta@cluster0.rdrot.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(result => {

        // for start our site
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        });
    }) // .catch any error consol it
    .catch(err => {
        console.log(err);
    });


app.get('/add-new-article', (req, res) => {
    res.render('add-new-article', { mytitle: "Create Article" })
});

app.get('/', (req, res) => {
    res.redirect('all-articles')
})


// all-articles PATH

app.use('/all-articles', birds)


//  404 
app.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});