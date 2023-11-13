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
  "to": "fcm sender key",
  "notification": {
    "title": "Emmanuel",
    "body": "Your trip starts here",
    "click_action": "http://localhost:3000/",
    "icon": "https://example.com/logo.png",
    "image": "https://example.com/map_location.png",
    "badge": "1", // Badge number (for iOS)
    "color": "#FF5733", // Background color of the notification
    "sound": "default", // Sound to be played
    "tag": "trip_notification", // Tag for grouping notifications
    "vibrate": [300, 100, 400], // Vibration pattern (milliseconds)
    "data": {
      "custom_key": "custom_value" // Custom data to be sent with the notification
    }
  }
}


```
