# Paperboy FCM

## How?

```js
const fcmConfig = require('./config.json')
const { sendFcm } = require('@kznjunk/paperboy-fcm')(fcmConfig)

const topic = 'bwop'
const title = 'Hello..'
const body = '..there!'

const res = await sendFCM(topic, title, body)
console.log(res) // projects/example/messages/000000000000108
```

## Note

- The config file can be generated via the Firebase console: https://console.firebase.google.com/u/0/project/{{project}}/settings/general
- And here an example template of how to subscribe to a topic/receive notifications on Android: https://github.com/kibwashere/notification-template-apk/blob/main/app/src/main/java/com/example/home/MainActivity.java#L25
