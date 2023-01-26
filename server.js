const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const { CountryCodes } = require('validator/lib/isISO31661Alpha2');
require('./Course');

mongoose.connect("mongodb://localhost/mongoose-course", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    strictQuery:true
  }, ()=>{
    console.log("Me conecte a la BD ");
});

const app = express ();

app.post('/cursos',(req,res)=>{
    const Curso = mongoose.model('Course');

    CountryCodes.create({
        title:"Curso de Mongoose",
        description: 'Tres'
    }). then(doc => {
        res.json(doc);
    }).catch(err => {
        console.log(err);
        res.json(err);
    });    
})




app.listen(8080, ()=> console.log("Server  started"))