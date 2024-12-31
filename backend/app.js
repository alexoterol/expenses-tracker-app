const express = require('express');
const cors = require('cors');
const {readdirSync} = require('fs');
const {db} = require('./db/db');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

// Ejemplo de uso de API
// app.get('/', (req, res)=>{
//     res.send('Hello Worl AAA');
// });

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))





const server = () => {
    db();

    app.listen(PORT, ()=>{
        console.log('listenint to port: ', PORT);
    });
};

server();