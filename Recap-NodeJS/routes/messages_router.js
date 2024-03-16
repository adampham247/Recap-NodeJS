const express = require('express');
const messagesController = require('../controllers/msg_ctrl');
const messagesRouter = express.Router();

messagesRouter.get('/', messagesController.getMessages);
messagesRouter.post('/', messagesController.postMessages);


module.exports = messagesRouter;