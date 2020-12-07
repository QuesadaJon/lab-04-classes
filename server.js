const express = require('express');
const app = express();
const { RemoveContents } = require('./functions')

app.post('/', (req, res) => {
    res.send('hi');
})

app.listen(8435, () => {
    console.log('started on port 8435')
})