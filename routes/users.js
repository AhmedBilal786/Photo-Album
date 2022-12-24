var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photoalbum')
.then(function(){
  console.log("connected");
});
let userSchema =mongoose.Schema({
  name : String,
  avatar : String
});
module.exports=mongoose.model('photo',userSchema);