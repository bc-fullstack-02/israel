const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vitor:vitor@3011.se3nwgm.mongodb.net/?retryWrites=true&w=majority", {}, (Error) =>{
   if(Error){
    console.log('falha ao conectar ao mongo');
    console.log(Error);
    return;
   } 
   console.log('conexão ao mongoDB ok!');
})

mongoose.Promise = global.Promise;

module.exports = mongoose;