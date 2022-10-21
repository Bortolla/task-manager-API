require('dotenv').config();
const express = require('express');
const tasks = require('./routes/tasks')
const app = express();
const connectDB = require('./db/connect');
const { connect } = require( 'mongoose' );

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Task Manager API');
})

app.use('/api/v1/tasks', tasks);

const PORT = process.env.PORT;

const start = async () => {
    try {
        await connectDB();
        console.log('Banco de dados conectado');
        app.listen(PORT, (error) => {
            error ? console.log(error) : console.log('Porta:', PORT);
        })
    }
    catch (error) {
        console.log('Erro no banco de dados');
        console.log(error);
    }
}

start()