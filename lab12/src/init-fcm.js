import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDABoN5w9RsxkKu5e7DUZ8uEbKDeURnTp4",
  authDomain: "sec1-4d5c2.firebaseapp.com",
  projectId: "sec1-4d5c2",
  storageBucket: "sec1-4d5c2.appspot.com",
  messagingSenderId: "526371527026",
  appId: "1:526371527026:web:d48a311b26be85cc4765eb",
  measurementId: "G-R1P3CG9ZWS"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BJ00m8XbcmrFKrit37C6IPyVL26huxgM0JxY5aFQUGR9u-8z4VYJ58kZn6Ou-TS16qlWrFvkcUh7Ip2MdlmFj4w"
);

export { messaging };
