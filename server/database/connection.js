const mongoose = require('mongoose')

const connectDB = () => {
        mongoose.connect('mongodb://localhost/booksAPI', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
            .then(() => console.log('Database connected!'))
            .catch(err => console.log('Database connection error', err))
}

module.exports = connectDB