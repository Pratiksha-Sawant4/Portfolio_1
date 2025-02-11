const express = require('express');
const router = express.Router();

// Contact form submission route
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Here you can add logic to handle the contact form data
        // For example, sending an email or saving to database
        
        res.status(200).json({ 
            success: true, 
            message: 'Message received successfully' 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Error processing your message', 
            error: error.message 
        });
    }
});

module.exports = router; 