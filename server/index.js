const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use( bodyParser.json() );



const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})