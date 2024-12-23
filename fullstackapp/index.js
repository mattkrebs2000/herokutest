const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5002;





app.use(cors());

app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send({ message: "Hello from server!!!!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});