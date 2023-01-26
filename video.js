const { default: mongoose } = require('mongoose')
const moongose = require ('mongoose')

let videoSchema = new mongoose.Shema({
    title: String,
    course: {
        typw: mongoose.Schema.Types.ObjectId,
        ref:'Course',
        require: true
    },

tags:[
    new mongoose.Schema({
        title:{
            type: String,
            required:true
        }
    })
]

});

mongoose.model('Video',videoSchema);