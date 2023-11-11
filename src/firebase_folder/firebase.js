import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging"

const firebaseConfig = {
    apiKey: "AIzaSyDnZyGAmj61UG2Kvpclydmjal1WON3-K9c",
    authDomain: "laravel-push-notifiction.firebaseapp.com",
    projectId: "laravel-push-notifiction",
    storageBucket: "laravel-push-notifiction.appspot.com",
    messagingSenderId: "804645632536",
    appId: "1:804645632536:web:9fdd3616117f8d0692616d",
    measurementId: "G-C79EH7LFCX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const message = getMessaging(app);
