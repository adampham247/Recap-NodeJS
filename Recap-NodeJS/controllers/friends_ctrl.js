const model = require('../models/friends_model');

function getListofFriends(req,res) {
    res.json(model);
}

function getFriend(req,res){
    const friendID = +req.params.friendId;
    const friend = model[friendID];
    if (friend){
        res.json(model);
    }
    else{
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
}

function postFriend(req,res){
    if (!req.body.name){
        res.status(400).json({
        error:'Missing friend name'
        });
    }
    else {
    const newFriend ={
        name: req.body.name,
        id: model.length
    };
    model.push(newFriend);

    res.json(newFriend);
    }   
}


module.exports = {
    getListofFriends,
    getFriend,
    postFriend,
}