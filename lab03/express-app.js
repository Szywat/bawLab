var express = require('express');
var app = express();
var {NodeAdapter} = require('ef-keycloak-connect');
const config = require('./config.json');
// const session = require('express-session');
// const port = 3000;

const keycloak = new NodeAdapter(config);

app.use(keycloak.middleware({ logout: '/logout' }));

app.get('/', (req, res) => {
    res.send("Server is up!")
})

app.get('/hello', keycloak.protect(), (req, res) => {
    res.send(req.kauth.grant.access_token.content)
    res.json({ message: "Udało się dostać do resource!" })
});

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Unauthorized' })
    } else {
        next(err)
    }
})

app.listen(3000, () => {
    console.log("Listening on 3000");
    
})