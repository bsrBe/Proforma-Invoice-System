const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const proformaRoutes = require('./routes/proformaRoutes');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', proformaRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
