import React, { useEffect, useState } from "react";
import { getMessaging, getToken } from "firebase/messaging";
import { message } from "./firebase";

function PushNotification() {
    const [myToken, setMyToken] = useState('')
    async function requestPermission() {
        console.log("Requesting permission...");
        const notification = await Notification.requestPermission();
        if (notification === "granted") {
            const token = await getToken(message, { vapidKey: 'BFJB8qqCjTD1LgwSCf1u-78s-W5WMNlEfV7bqmKCb9ehfytaVidqS798lfpS-XvFssIwkbW2T-624V9wCdZkpTQ' })
            console.log("Notification permission granted.", "token here token");
            setMyToken(token)
            console.log(token);
        } else if (notification === "denied") {
            console.log("Notification permission denied.");
        } else {
            console.log("Notification permission else");
        }
    }

    useEffect(() => {
        requestPermission()
    }, [])
    return (
        <div>PushNotification

            <br />
            here is the token
            <br />
            {myToken}
        </div>
    )
}

export default PushNotification