const express = require('express');
const cors = require('cors');
const { Router } = require('express');

const app = express();
const PORT = 8888;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose');
require('./server/routes/routes')(app)
//Router(app);

app.listen(PORT, () => console.log(`you are on port ${PORT}`))


