install firebase 

```npm
npm install firebase
```

in public folder create file firebase-messaging-sw.js

send notifiction through postman or http

header beara token

server key 

send url https://fcm.googleapis.com/fcm/send

```json
{
  "to":"token",
  "notification": {
    "title": "Your Title",
    "body": "Your Notification Message"
  }
}

```
