// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model');

// all your routes here

//CREATE NEW CELEBRITY

router.get("/create", (req,res)=>{
    res.render("celebrities/new-celebrity")
})

router.post("/new-celebrity", (req,res,next)=>{
    console.log(Celebrity)

    const {name, occupation, catchPhrase} = req.body
    Celebrity.create({name, occupation, catchPhrase})
    
        .then(newCelebrity=>{
        console.log(newCelebrity)
            res.redirect("/celebrities/celebrities")
     }).catch((error)=> {
        console.log(error)
             res.redirect("/celebrities/create")});
});

   

module.exports = router; 