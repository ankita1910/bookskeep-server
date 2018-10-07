const express = require('express')
const subscriptionQueries = require('./mysql/queries')
const sendWebPush = require('./webpush')

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.get('/send-push', (req, res) => {
    subscriptionQueries.getSubscriptions((rows) => {
        rows.map (r => {
            let subscription = JSON.parse(r.subscription)
            sendWebPush(subscription)
        })
        res.json({ message: 'Web Push sent' })
    })
})

app.post('/subscribe', (req, res) => {
    let data = ''
    req.on('data', (chunks) => {
        data += chunks
    })
    req.on('end', () => {
        let serializedData = JSON.parse(data.toString())
        subscriptionQueries.create(serializedData, () => {
            res.json({ data: 'Subscription stored successfully.' })
        })
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})
