const express = require('express');
const cors = require('cors');

// Initializations
const app = express();
require('./database/database');

// Middlewares
app.use(express.json());
app.use(cors())

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
app.use('/api/notes', require('./routes/note.routes'))

// Server
let main = async () => {
    await app.listen(app.get('port'), () => {
        console.log(`Server online on port ${app.get('port')}`);
    })
}

main();

