const express = require('express')
const path = require('path')

const app = express()

// Serve home page. Polling browser requests are made from index.html.
app.get('/', function(req, res) {
    res.sendFile(path.resolve(process.cwd(), 'index.html'))
})

// Used by browser to repeatedly make interval based resource requests to the
// server for new information.
app.post('/polling', function(req, res) {
    // Simulate intermittently available data.
    res.json(Math.random() > 0.5 ? 'data' : null)
})

// Used by the browser to make a single resource request that is held open by
// the server until new information is available.
app.post('/long-polling', function(req, res) {
    // Hold connection open until data available.
    setTimeout(function() {
        res.json('data')
    }, Math.random() * 5000)
})

app.listen(3000, function() {
    console.log('server listening on http://localhost:3000')
})
