const express = require('express');
const Conversation = require('../models/ConversationSchema');
const conv_controller = require('../controllers/convController');

const router = express.Router()

//POST new conversation
router.post('/', conv_controller.newConversation);

//PUT new message in conversation
router.put('/', conv_controller.addMessage)

//GET all conversations from user
router.get('/:userId', conv_controller.getConversations);

//GET a conversation for the user
router.get('/:userId/:convId', conv_controller.getConversations);

module.exports = router;