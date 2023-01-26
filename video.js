const { default: mongoose } = require('mongoose')
const moongose = require ('mongoose')

let videoSchema = new mongoose.Shema({
    title: String,
    course: {
        typw: mongoose.Schema.Types.ObjectId,
        ref:'Course',
        require: true
    }
});

mongoose.model('Video',videoSchema);