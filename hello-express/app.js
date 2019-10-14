const express = require('express');
const app = express();
const port = 3999;

app.get('/', (req, res) => res.send('hello world!'));

app.listen(port, () => console.log(`---> hello-express running on port ${port}!`));

