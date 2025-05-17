// Load environment variables
require('dotenv').config();

// Import packages
const express = require('express');

// ✅ Initialize the Express app
const app = express();

// Middlewares
app.use(express.json());

// Import your services
const emailService = require('./services/emailService');
const smsService = require('./services/smsService');
const whatsappService = require('./services/whatsappService');
const pushService = require('./services/pushService');

// Routes
app.post('/notify', async (req, res) => {
  const { type, to, subject, message, title } = req.body;

  try {
    if (type === 'email') {
      await emailService.sendEmail(to, subject, message);
    } else if (type === 'sms') {
      await smsService.sendSMS(to, message);
    } else if (type === 'whatsapp') {
      await whatsappService.sendWhatsApp(to, message);
    } 
    // else if (type === 'push') {
    //   await pushService.sendPushNotification(to, title, message);
    // }
     else {
      return res.status(400).json({ error: 'Unsupported notification type' });
    }

    res.json({ status: 'Notification sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send notification' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Notification service running on port ${PORT}`);
});
