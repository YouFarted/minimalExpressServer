const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

app.set('port', PORT);

app.get('/', (req, res) => res.send('Hello Mars!'))

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))

