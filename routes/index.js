const express = require("express");
const router = express.Router();

// router.get("/", function(req, res) {
//   res.render("form");
// });
router.get("/", function(req, res) {
  res.render("form");
});

router.post("/submit", function(req, res) {

  req.checkBody("email", "Email cannot be empty.").notEmpty();
  req.checkBody("email", "Must be an email.").isLength({max: 100});
  req.checkBody("name", "name cannot be empty.").notEmpty();
  req.checkBody("name", "Must be a name.").isLength({max: 100});
  req.checkBody("position", "Email cannot be empty.").notEmpty();
  req.checkBody("position", "Must be an email.").notEmpty();
  if(req.body.birthday){
  req.checkBody("year", "Email cannot be empty.").isLength({min: 1900});
  req.checkBody("year", "Must be an email.").isLengt({max: 2017});
  }
req.checkBody("password", "password is too short").isLength({min: 8})
let errors = req.getValidationResult();
let messages = [];
errors.then(function(result){
  result.array().forEach(function(error){
  messages.push(error.msg);
});

console.log(messages);

let data = {
  errors: messages,
  name: req.body.name,
  email: req.body.email,
  year: req.body.year,
  postion: req.body.Position,
  password: req.body.Password,
};


  res.render('results', data);
});
});
module.exports = router;
