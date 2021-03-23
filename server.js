const express = require("express");

const app = express();

let users = {
    1: {
        id: '1',
        username: 'Jane Doe',
    },
    2: {
        id: '2',
        username: 'Joe Doe',
    },
};

let messages = {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'Goodbye World',
        userId: '2',
    },
};

app.get('/', (req, res) => {
    return res.send(Object.values(users));
});

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
});

app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
});

app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
});

app.listen(process.env.SERVER_PORT, function () {
  console.log('Listening on port ' + process.env.SERVER_PORT)
})
