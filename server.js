const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || auth !== 'Bearer 0ed2679286cb') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
});

app.get('/system/status', (req, res) => {
  res.json({
    apps: 4,
    integrations: [
      { name: 'Slack', status: 'connected' },
      { name: 'Zapier', status: 'error' },
      { name: 'Airtable', status: 'connected' }
    ]
  });
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
