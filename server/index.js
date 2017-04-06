const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe');

let app = express();

app.use(express.static('../public'));
app.use(cors())
app.use(bodyParser.json());


const port = 3000
app.listen(port, () => {
  console.log(`we got them on port ${port}`);
})
