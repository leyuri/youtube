const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const videoSchema = mongoose.Schema({

    writer: {
        type: Schema.Types.ObjectId,
        ref:'User'
        //이렇게 하면 User에 있는 정보도 가져올 수 있음
    },
    title: {
        type:String,
        maxlength: 50
    },
    description: {
        typeLString
    },
    privacy: {
        type: Number
    },
    filePath: {
        type: String
    },
    category : {
        trype: String
    },
    //처음 조회수는 0부터 시작하기 때문에
    views: {
        type: Number,
        default: 0
    },
    duration: {
        type: String
    },
    thumbnail: {
        type: String
    }
}, { timestamps: true})







const Video = mongoose.model('User', videoSchema);

module.exports = { Video }