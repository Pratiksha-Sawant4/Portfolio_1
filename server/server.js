const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log('MongoDB connection error:', err));

// Routes
const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);

// Only use contact routes if the file exists
try {
    const contactRoutes = require('./routes/contact');
    app.use('/api/contact', contactRoutes);
} catch (error) {
    console.log('Contact routes not yet implemented');
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 