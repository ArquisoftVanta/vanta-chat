const { Conversation, Message } = require("../models/ConversationSchema");

//Receives 2 users and Creates a new conversation
exports.newConversation = function (req, res) {
  req.body["active"] = true;
  req.body["conversation"] = [];

  const conversation = new Conversation(req.body);
  conversation.save((err) => {
    if (!err) {
      return res.status(201).send(conversation);
    } else {
      console.log(err);
      return res.status(500).send("Server Error");
    }
  });
};

//Receivs a Conversation a Message and adds the new Content to its Messages
exports.addMessage = async function (req, res) {
  try {
    const id = req.body.convId;
    const message = new Message({
      sender: req.body.userId,
      content: req.body.content,
    });
    await Conversation.findById(id, (err, conv) => {
      if (conv.user1 == message.sender || conv.user2 == message.sender) {
        conv.conversation.push(message);
        conv.save((err) => {
          if (!err) {
            //console.log(message)
            return res.status(200).send(message);
          }
        });
      } else {
        return res
          .status(401)
          .send("Este usuario no puede añadir mensajes a esta conversacion");
      }
    });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};

//Receives a User and Finds all conversations from it
exports.getConversations = async function (req, res) {
  try {
    const userId = req.params.userId;
    await Conversation.find(
      {
        $or: [
          { user1: userId, active: true },
          { user2: userId, active: true },
        ],
      },
      (err, convs) => {
        if (!err) {
          return res.status(200).send(convs);
        }
      }
    );
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};

//Receives a User and ConversationID and finds the conversation
exports.getConversationId = async function (req, res) {
  try {
    const userId = req.params.userId;
    const convId = req.params.convId;
    //console.log(convId)
    await Conversation.findById(convId, (err, conv) => {
      if (!err) {
        //console.log(conv);
        if (conv.user1 == userId || conv.user2 == userId) {
          return res.status(200).send(conv);
        } else {
          return res
            .status(401)
            .send("Este usario no puede acceder esta conversacion");
        }
      }
    });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};
