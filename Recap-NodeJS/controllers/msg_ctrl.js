const path = require('path');

function getMessages(req, res) {
    
    // res.sendFile(path.join(__dirname,'..','public','images','coding_img.png'));
    res.render('messages',{
        title: 'Messages to my Friends!',
        friend: 'Tony',
    })
}

function postMessages(req,res){
    res.send('Updating messages....');
}

module.exports = {
    getMessages,
    postMessages,
}

