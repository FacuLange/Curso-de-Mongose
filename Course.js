const mongoose  = require('mongoose');
const isEmail  =  require('validator').isEmail;

let courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        requiredq:true,
        validate: [isEmail, 'El email es valido']
         },
    Description: {
        type: String,
        minlength: [50, 'No se cumple la longitud minima de 50'],
        maslength: 300,
    },
    numberOfTopics:{
        type: Number,
        default: 0,
        min: 0,
        max: 100 
    },
    publishedAt: Date,
    slug: {
        type: String,
        required: true
    }

});
//
courseSchema.virtual('info')
.get(function(){
    return `${this.Description}. Temas #{this.numberOfTropic} Fecha de lanzamiento: ${this.publishedAt}`;

});




courseSchema.pre('validate',function(next){
    this.slug = slugify(this.tittle);
    next();
})

mongoose.model('Course', courseSchema);
