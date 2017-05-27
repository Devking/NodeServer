// Note that no packages were needed to import http
// But you do need to install Express to use Express

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
