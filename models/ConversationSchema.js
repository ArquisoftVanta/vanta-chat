const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema(
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
    conversation:[msgSchema]
},
{
    timestamps: true
});

let Conversation = mongoose.model("Conversation", convSchema);
let Message = mongoose.model("Message", msgSchema)
module.exports = {Conversation, Message};