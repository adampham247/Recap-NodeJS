const express = require('express');

const friendsController = require('./controllers/friends_ctrl');
const messagesController = require('./controllers/msg_ctrl');

const app = express();

const PORT = 3000;

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


const friendsRouter = require('./routes/friends_router');
app.use('/friends', friendsRouter);
const messagesRouter = require('./routes/messages_router');
app.use('/messages', messagesRouter);

//port
app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`);
})