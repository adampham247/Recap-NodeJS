const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'Adam Pham'
    },
    {
        id: 1,
        name: 'Tom'
    }

];
//middleware 
app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

//route
app.get('/', (req, res) =>{
    res.send('Hello');
});

app.get('/messages', (req, res) =>{
    res.send('My name is Adam. Nice to meet you!');
});

app.get('/friends', (req, res) => {
    res.json(friends);
});

app.get('/friends/:friendId', (req, res)=>{
    const friendID = +req.params.friendId;
    const friend = friends[friendID];
    if (friend){
        res.json(friend);
    }
    else{
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
})

app.post('/friends', (req,res) =>{
    if (!req.body.name){
        res.status(400).json({
        error:'Missing friend name'
        })
    }
    else {
    const newFriend ={
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend);

    res.json(newFriend);
    }   
})

app.post('/messages', (req, res) => {
    res.send('Updating messages....');
});

//port
app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`);
})