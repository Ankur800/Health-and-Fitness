const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// For Cross Origin Resource Sharing
app.use(cors());
app.options('*', cors());

// Connect here database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('API Running');
});

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`);
});
