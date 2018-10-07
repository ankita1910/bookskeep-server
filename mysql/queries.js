const dbPool = require('./pool')

const create = ({ id, subscription }, callback) => {
    const connection = dbPool
    const query = `INSERT INTO subscription (id, subscription) VALUES (?, ?)`
    const values = [id, JSON.stringify(subscription)]
    connection.query(query, values, (err, result) => {
        callback()
    })
}

const getSubscriptions = (callback) => {
    const connection = dbPool
    const query = `SELECT * from subscription`
    connection.query(query, (err, result) => {
        if (!err) {
            callback(result)
        }
    })
}

const subscriptionQueries = {
    create,
    getSubscriptions
}

module.exports = subscriptionQueries
