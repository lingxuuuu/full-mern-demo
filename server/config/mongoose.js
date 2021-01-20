const mongoose = require('mongoose');
const db = 'jan-todos'

mongoose.connect(`mongodb://localhost/${db}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then( () =>console.log(`you have connected to the ${db}`) )
  .catch( (err) => console.log(err) )

require('../models/Todo');