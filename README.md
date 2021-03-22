# Paperboy FCM

## Requirements

todo

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
