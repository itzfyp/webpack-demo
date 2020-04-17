const express = require('express');

const path = require('path');

const fs = require('fs');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, './dist')));

app.get('/', (req, res) => {
    const pathToFile = path.resolve(__dirname, './dist/btn.html');
    const contentFromHTMLfile = fs.readFileSync(pathToFile, 'utf-8');
    res.send(contentFromHTMLfile);
});


app.listen(3000, () => {
    console.log('Application is running')
});