function getMessages(req, res) {
    res.send('My name is Adam. Nice to meet you!');
}

function postMessages(req,res){
    res.send('Updating messages....');
}

module.exports = {
    getMessages,
    postMessages,
}