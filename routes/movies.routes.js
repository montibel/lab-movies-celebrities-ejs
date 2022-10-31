// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');

// all your routes here
router.get("/create", (req,res)=>{ //SHOW
    res.render("movies/new-movie")
})

router.post("/create", (req,res,next)=>{ // SEND
    console.log(req.body)
    const {title, genre, plot, cast} = req.body
    Movie.create({title, genre, plot, cast})
        .then(newMovie=>{
        console.log(newMovie)
            res.redirect("/movies/movies")
     }).catch((error)=> {
        console.log(error)
             res.redirect("/movies/create")});
});
module.exports = router