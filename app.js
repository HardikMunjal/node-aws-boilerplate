const express =  require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Node AWS Boilerplate WC21 APP</h1><ul><li>/wc21/top-scorer</li><li>/wc21/best11</li></ul>')
})