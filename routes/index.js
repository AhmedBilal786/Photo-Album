var express = require('express');
var router = express.Router();
var multer = require('multer');
var usermodel = require('./users.js');
var storage = multer.diskStorage({
  destination :function(req,file,cb){
    cb(null,'public/images/uploads')
  },
  filename :function(req,file,cb){
    cb(null,file.originalname)
  }
});
var upload = multer({storage:storage})
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/submit',upload.single("avatar"),function(req,res){
  usermodel.create({
    name :req.body.name,
    avatar :req.file.filename
  })
  .then(function(data){
    res.render('gallery',{data});
  });
});
module.exports = router;
