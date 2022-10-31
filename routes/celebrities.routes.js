// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model');

// all your routes here

router.get("/create", (req,res)=>{ //SHOW
    res.render("celebrities/new-celebrity")
})




router.post("/new-celebrity", (req,res,next)=>{ // SEND
    console.log(req.body)
    const {name, occupation, catchPhrase} = req.body
    Celebrity.create({name, occupation, catchPhrase})
        .then(newCelebrity=>{
        console.log(newCelebrity)
            res.redirect("/celebrities/celebrities")
     }).catch((error)=> {
        console.log(error)
             res.redirect("/celebrities/create")});
});

router.get("/celebrities", (req,res)=>{
    console.log(req.body)
    Celebrity.find().then((celebrities)=>{
        console.log(celebrities)
         res.render("celebrities/celebrities", {celebrities})
    }).catch((err) => console.log(err))
});

module.exports = router; 