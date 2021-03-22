module.exports = function paperboyFcm(config) {
    if (!config) throw new Error('FCM requires a config..')

    const admin = require('firebase-admin')

    admin.initializeApp({
        credential: admin.credential.cert(config),
        databaseURL: 'https://prismappfcm.firebaseio.com'
    })

    return { sendFcm }

    async function sendFcm(topic, title, body) {
        const message = {
            notification: {
                title,
                body
            },
            topic
        }

        try {
            return await admin.messaging().send(message)
        } catch (e) {
            return e
        }
    }
}
