const webPush = require('web-push')
const vapidKeys = {
    publicKey: 'BPZIQVuuwYUOSvrLyqw9wVuheVR3zbkV5V3XZNbvhUFc5kLq89IKU3c2u4e0ItziU-A2qcTZy2F5GWFdMeKwrIY',
    privateKey: '<YOUR PRIVATE KEY>'
}

webPush.setVapidDetails(
    'mailto:amasand23@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

const sendWebPush = (subscription) => {
    webPush.sendNotification(subscription, {})
}

module.exports = sendWebPush
