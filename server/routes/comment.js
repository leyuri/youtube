const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");

const { auth } = require("../middleware/auth");

//=================================
//             Comment
//=================================


router.post("/saveComment", (req, res) => {

   const comment = new Comment(req.body) 
   //클라이언트에서 불러온 정보들

    comment.save((err, comment ) => {   //db에 저장한다
        if(err) return res.json({ success:false, err})

        Comment.find({ '_id': comment._id })
        .populate('writer') //모든 writer들의 정보를 가져옴
        .exec((err, result) => {
            if(err) return res.json({ success:false, err })
            return res.status(200).json({ success:true, result })
        })

    })

});




module.exports = router;