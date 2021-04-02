const mongoose = require('mongoose');

const mssgSchema = new mongoose.Schema(
{
   sender:{
       type:String
   },
   content:{
       type:String
   }
},
{
    timestamps: true
});

const convSchema = new mongoose.Schema(
{
    user1:{
        type: String
    },
    user2:{
        type: String
    },
    active:{
        type: Boolean
    },
    conversation:[mssgSchema]
},
{
    timestamps: true
});

let Conversation = mongoose.model("Conversation", convSchema);
module.exports = Conversation;