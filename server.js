const express = require('express');
const mongoose = require('mongoose');
require('./Course');

mongoose.connect("mongodb://localhost/mongoose-course", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    strictQuery:true
  }, ()=>{
    console.log("Me conecte a la BD ");
});

const app = express ();

app.post('/cursos')

app.get("/",(req,res)=>{
    res.send("Hola Mundo");
})


app.listen(8080, ()=> console.log("Server  started"));