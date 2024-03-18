const express = require('express');

const friendsController = require('./controllers/friends_ctrl');
const messagesController = require('./controllers/msg_ctrl');
const path = require('path');
const app = express();

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));

const PORT = 3000;

//middleware 
app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
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
app.use('/site', express.static(path.join(__dirname,'public')));

app.get('/site',(req,res)=>{
    res.render('index',{
        title: 'Coding is fun',
        caption: 'Let\'s do some coding'
    });
})

//port
app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`);
})