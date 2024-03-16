const express = require('express');
const friendsController = require('../controllers/friends_ctrl');
const friendsRouter = express.Router();

friendsRouter.get('/', friendsController.getListofFriends);
friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/:friendID', friendsController.getFriend);

module.exports= friendsRouter;

