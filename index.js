const express = require('express');

const handler = require('./handler/handler')
const { input } = require('./crud/input');
const { search } = require('./crud/search');
const { searchNewest } = require('./crud/search');
const { edit } = require('./crud/edit');
const { delet } = require('./crud/delet');

const app = express();
const port = 9000;
const info = [];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    handler.searchHandler(search(req.query.id, info, true), res);
});

app.post('/add', (req, res) => {
    handler.inputHandler(input(req.body, info), res);
});

app.get('/novinho', (req, res) => {
    handler.searchNewestHandler(searchNewest(info), res);
});

app.put('/edit', (req, res) => {
    handler.editHandler(edit(req.query.id, req.body, info), res);
});

app.delete('/delete', (req, res) => {
    handler.deleteHandler(delet(req.query.id, info), res);
});


app.listen(port, () => console.log(`API iniciada em http://localhost:${port}`));