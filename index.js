const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()


//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('fuck you')
});

app.listen(port, () => {
    console.log('listening ', port);
})