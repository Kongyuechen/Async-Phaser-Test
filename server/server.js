const path = require('path');
const express = require('express');

const app = express();
const PUBLIC_DIR = path.join(__dirname, '../public');
const HTML_FILE = path.join(PUBLIC_DIR, 'index.html');

app.use(express.static(PUBLIC_DIR));
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {

});
