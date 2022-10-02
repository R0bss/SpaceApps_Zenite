const express = require('express');
const routes = express.Router()
//const instructors = require('./controllers/instructors')

//const home = require('.home')

//const members = require('./controllers/members')

routes.get('/', function(req, res){
  return res.redirect("/home")
})

routes.get('/home', function(req, res){
    return res.render("index")
});



module.exports = routes