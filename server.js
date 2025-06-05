const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Webhook Route
app.post('/donate', (req, res) => {
  const { name, amount, message } = req.body;
  console.log('💸 New Donation Received:', { name, amount, message });
  res.status(200).json({ success: true, message: `Thanks ${name} for donating Rs.${amount}! 💖` });
});

// Root route (optional)
app.get('/', (req, res) => {
  res.send('HopeForLanka Webhook is Live ✅');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
