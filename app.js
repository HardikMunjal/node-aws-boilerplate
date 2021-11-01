const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Node AWS Boilerplate WC21 APP</h1><ul> <h2>API`S LIST:</h2><li>/wc21/top-scorer</li><li>/wc21/best11</li></ul>')
})

app.get('/wc21/top-scorer', (req, res) => {
    res.send([{
        "player_id": '121',
        "name": "Virat Kohli"
    },
    {
        "player_id": '131',
        "name": "David Warner"
    }
    ])
})

app.get('/wc21/best11', (req, res) => {
    res.send([{
        "player_id": '151',
        "name": "Babar Azam(C)"
    },
    {
        "player_id": '141',
        "name": "Kane Williamson(VC)"
    }
    ])
})

app.listen(port, () => {
    console.log('boilerplate app listening on 3000 port')
})