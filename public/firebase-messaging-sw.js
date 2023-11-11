importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyDnZyGAmj61UG2Kvpclydmjal1WON3-K9c",
    authDomain: "laravel-push-notifiction.firebaseapp.com",
    projectId: "laravel-push-notifiction",
    storageBucket: "laravel-push-notifiction.appspot.com",
    messagingSenderId: "804645632536",
    appId: "1:804645632536:web:9fdd3616117f8d0692616d",
    measurementId: "G-C79EH7LFCX"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
