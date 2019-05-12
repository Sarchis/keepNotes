const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/keepNotes', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useFindAndModify: false
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err))