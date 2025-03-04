const express = require('express');
const path = require('path');
const app = express();
// Serve static files
app.use(express.static(__dirname));
// Route for the root path
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'index.html'));
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
